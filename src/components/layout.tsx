import { FC, ReactNode } from 'react';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
