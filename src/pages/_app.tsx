import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Mulish } from 'next/font/google';
import { Layout } from '@/components/layout';

export const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-primary',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${mulish.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
