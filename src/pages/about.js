import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'
import aboutPic from '../../public/images/profile/christian-about.jpg'
import { site, about } from '@/data/site'

const About = () => {
    const experience = about.experience.map((job) => ({
        title: job.position,
        subtitle: job.company,
        subtitleLink: job.companyLink,
        time: job.time,
        place: job.place,
        text: job.work,
    }))

    const education = about.education.map((item) => ({
        title: item.type,
        time: item.time,
        place: item.place,
        text: item.info,
    }))

    return (
        <>
            <Head>
                <title>{`About | ${site.name}`}</title>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='!pt-8 sm:!pt-16'>
                    <AnimatedText text={about.headline} className='mb-12 sm:mb-16' />

                    <div className='grid w-full grid-cols-1 lg:grid-cols-8 gap-12 lg:gap-16'>
                        <div className='lg:col-span-5 flex flex-col items-start justify-start order-2 lg:order-1'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            {about.bio.map((paragraph, i) => (
                                <p key={i} className='font-medium mb-4 last:mb-0'>{paragraph}</p>
                            ))}
                        </div>

                        <div className='lg:col-span-3 order-1 lg:order-2 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light
                            bg-light p-6 sm:p-8 max-w-md mx-auto lg:max-w-none'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={aboutPic} alt={site.name} className='w-full h-auto rounded-2xl' priority
                                sizes="(max-width: 1024px) 90vw, 33vw" />
                        </div>
                    </div>

                    <Skills skills={about.skills} />
                    <Timeline heading="Experience" items={experience} />
                    <Timeline heading="Education" items={education} />
                </Layout>
            </main>
        </>
    )
}

export default About
