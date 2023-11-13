import Image from 'next/image';
import logo from '@/assets/lugar-logo-white.png';

export const Footer = () => {
  return (
    <footer className="bg-[#1E3240] min-h-[400px] mt-32 px-9 lg:px-[165px] pb-8">
      <div className="flex flex-wrap w-full justify-between m-auto gap-12 pt-32">
        <nav className="flex flex-col gap-3">
          <Image
            src={logo}
            alt="Lugar logo"
            className="object-contain w-28 mt-2"
          />
          <p className="text-[#BDBDBD] text-sm">
            2118 Thornridge Cir. Dubai, UAE 35624
          </p>
          <p className="text-[#BDBDBD] text-sm">+33 415 65356 - 9</p>
          <p className="text-[#BDBDBD] text-sm">contact@lugar.com</p>
        </nav>

        <nav className="flex flex-col gap-3">
          <h4 className="text-white">QUICK LINKS</h4>
          <p className="text-[#BDBDBD] text-sm">Home</p>
          <p className="text-[#BDBDBD] text-sm">About</p>
          <p className="text-[#BDBDBD] text-sm">Contact</p>
        </nav>
        <nav className="flex flex-col gap-3">
          <h4 className="text-white">LEGAL LINKS</h4>
          <p className="text-[#BDBDBD] text-sm">Terms</p>
          <p className="text-[#BDBDBD] text-sm">Conditions</p>
          <p className="text-[#BDBDBD] text-sm">Policy</p>
        </nav>
        <nav className="flex flex-col gap-3">
          <h4 className="text-white">SOCIAL MEDIA</h4>
          <p className="text-[#BDBDBD] text-sm">Facebook</p>
          <p className="text-[#BDBDBD] text-sm">Twitter</p>
          <p className="text-[#BDBDBD] text-sm">YouTube</p>
          <p className="text-[#BDBDBD] text-sm">LinkedIn</p>
        </nav>
      </div>
      <p className="text-[#BDBDBD] text-[12px] mt-12">
        Copyright @ 2022 Lugar Inc.
      </p>
    </footer>
  );
};
