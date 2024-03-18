import Image from "next/image";

export default function Welcome() {
  return (
    <section className="mt-20 w-full flex-center flex-col flex items-center">
        <h1 className="head_text text-center"> Discover & Share
          <br/>
          <span className="orange_gradient text-center">Crypto News & Updates</span>
        </h1>
        <p className="desc p-2">
          <span className="text-indigo-400">Level X</span> is powered by AI to deliver the latest crypto news, prices, and updates.
        </p>
        <button
          type="button"
          className="border-2 bg-gradient-to-r border-indigo-400 rounded-3xl px-10 py-2 m-5 hover:bg-indigo-300 hover:text-white">
            Get Started
        </button>

        <div className="h-fit">
          <Image 
            src='/mainPic.svg' 
            alt="logo" 
            width={1200} 
            height={500}
            />
        </div>
    </section>
  );
}