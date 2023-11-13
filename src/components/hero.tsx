import Image from 'next/image';
import heroImage from '@/assets/hero.png';
import Balancer from 'react-wrap-balancer';

export const Hero = () => {
  return (
    <section className="bg-[#AFD4E2] h-[750px] relative">
      <div className="w-full h-full flex flex-col justify-center px-9 lg:px-[165px] z-[2] relative">
        <h1 className="text-7xl lg:text-8xl font-bold text-[#1E3240] max-w-lg lg:max-w-2xl lg:leading-[108px]">
          <Balancer>A home is built with love and dreams</Balancer>
        </h1>
        <p className="mt-5 text-[18px]">
          Real estate farm that makes your dreams true
        </p>
        <div className="flex mt-8 gap-[30px]">
          <button className="bg-[#1E3240] text-white px-6 py-[18px]">
            Our projects
          </button>
          <button className="px-6 py-[18px] border border-[#1E3240]">
            Contact us
          </button>
        </div>
      </div>

      <div className="absolute top-0 right-0 h-full  w-full max-w-2xl  z-[1]">
        <Image src={heroImage} alt="Hero image of a house" priority fill />
      </div>
    </section>
  );
};
