import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { site } from '@/data/site';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={site.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${montserrat.variable} font-mont w-full min-h-screen flex flex-col`}>
        <NavBar />
        <div className='flex-1'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}
