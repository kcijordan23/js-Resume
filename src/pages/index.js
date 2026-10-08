import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/images/profile/christian-home.png';
import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icon';
import { site, home } from '@/data/site';
import withBase from '@/lib/withBase';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${site.name} | ${site.role}`}</title>
      </Head>
      <main className='flex items-center w-full min-h-[calc(100vh-8rem)]'>
        <Layout className='!pt-0'>
          <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-8'>
            <div className='w-3/4 sm:w-1/2 lg:w-1/3'>
              <Image src={profilePic} alt={site.name} className='w-full h-auto' priority
                sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col items-center self-center text-center lg:text-left'>
              <p className='self-stretch font-semibold uppercase tracking-widest text-sm text-primary dark:text-primaryDark mb-2'>
                {site.name} &middot; {site.company}
              </p>
              <AnimatedText text={home.headline} className='lg:!text-left' />
              <p className='my-4 text-base font-medium'>{home.intro}</p>
              <div className='flex items-center justify-center lg:justify-start self-stretch mt-2 gap-4 flex-wrap'>
                {site.cvUrl && (
                  <a href={withBase(site.cvUrl)} target="_blank" rel="noopener noreferrer" download
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent
                      hover:bg-light hover:text-dark hover:border-dark
                      dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">
                    Download CV <LinkArrow className="!w-6 ml-1" />
                  </a>
                )}
                <Link href="/projects"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent
                    hover:bg-light hover:text-dark hover:border-dark
                    dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light">
                  See my work
                </Link>
                <a href={`mailto:${site.email}`} className="text-lg font-medium underline underline-offset-2">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
