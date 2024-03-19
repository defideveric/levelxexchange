'use client';
import Image from 'next/image';
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

interface NavBarItemProps {
  title: string;
  path: string;
  classprops?: string;
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavBarItem = ({ title, path, classprops }: NavBarItemProps) => (
    <Link href={path} passHref>
      <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
    </Link>
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center text-2xl font-bold">
        <Link href="/home">
          <Image src="/levelX.png" alt='logo' width={150} height={100}/>
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          { title: 'Home', path: '/home' },
          { title: 'Cryptocurrencies', path: '/cryptocurrencies' },
          { title: 'Exchanges', path: '/exchanges' },
          { title: 'News', path: '/news' },
        ].map(({ title, path }, index) => (
          <NavBarItem key={path + index} title={title} path={path} />
        ))}
        <li className="bg-purple-500 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-indigo-300">
          Launch App
        </li> 
      </ul>
      <div className="flex relative">
        {!isOpen && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={toggleMenu}
          />
        )}
       
        {isOpen && (
          <ul className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={toggleMenu} />
            </li>
            {[
              { title: 'Home', path: '/home' },
              { title: 'Cryptocurrencies', path: '/cryptocurrencies' },
              { title: 'Exchanges', path: '/exchanges' },
              { title: 'News', path: '/news' },
            ].map(({ title, path }, index) => (
              <NavBarItem
                key={path + index}
                title={title}
                path={path}
                classprops="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}'use'