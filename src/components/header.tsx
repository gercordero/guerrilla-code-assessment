import Image from 'next/image';
import logo from '@/assets/lugar-logo.png';

export const Header = () => {
  return (
    <header className="bg-[#AFD4E2] pt-12 z-50 px-9 lg:px-[165px] w-full h-16 flex justify-between">
      <Image src={logo} alt="Lugar logo" className="object-contain w-28" />

      <nav className="flex justify-center items-center">
        <ul className="hidden md:flex gap-16">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};
