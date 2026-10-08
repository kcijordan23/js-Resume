import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/Icon'
import { site, projects } from '@/data/site'
import withBase from '@/lib/withBase'

const Tags = ({ tags = [] }) => (
    <ul className='flex flex-wrap gap-2 mt-3'>
        {tags.map((tag) => (
            <li key={tag} className='text-xs sm:text-sm font-semibold rounded-full px-3 py-1 border border-solid border-dark/40 dark:border-light/40'>
                {tag}
            </li>
        ))}
    </ul>
)

const ProjectLinks = ({ github, link, title }) => (
    <div className='mt-4 flex items-center gap-4'>
        {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className='w-10' aria-label={`${title} on GitHub`}>
                <GithubIcon />
            </a>
        )}
        {link && (
            <a href={link} target="_blank" rel="noopener noreferrer"
                className='rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-base sm:text-lg font-semibold'>
                Visit project
            </a>
        )}
    </div>
)

// Placeholder panel for projects that don't have a screenshot yet
const TagPanel = ({ type }) => (
    <div className='w-full aspect-[16/9] rounded-lg flex items-center justify-center p-6 text-center
        bg-gradient-to-br from-primary/90 to-dark dark:from-primaryDark/80 dark:to-dark'>
        <span className='text-light text-xl sm:text-2xl font-bold'>{type}</span>
    </div>
)

const Card = ({ children, featured }) => (
    <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`relative w-full flex rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark
            shadow-2xl p-6 sm:p-8 ${featured ? 'flex-col lg:flex-row items-center justify-between lg:p-12 rounded-br-2xl' : 'flex-col items-center justify-center'}`}>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light' />
        {children}
    </motion.article>
)

const FeaturedProject = ({ project }) => (
    <Card featured>
        <a href={project.link || project.github} target="_blank" rel="noopener noreferrer"
            className='w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg bg-white'>
            {project.img
                ? <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                    <Image src={withBase(project.img)} alt={project.title} width={1600} height={549}
                        className='w-full h-auto' sizes="(max-width: 1024px) 100vw, 50vw" />
                  </motion.div>
                : <TagPanel type={project.type} />}
        </a>
        <div className='w-full lg:w-1/2 flex flex-col items-start justify-between pt-6 lg:pt-0 lg:pl-8'>
            <span className='text-primary dark:text-primaryDark font-medium text-lg sm:text-xl'>{project.type}</span>
            <h2 className='my-2 w-full text-left text-2xl sm:text-3xl lg:text-4xl font-bold'>{project.title}</h2>
            <p className='my-2 font-medium text-dark/80 dark:text-light/80'>{project.summary}</p>
            <Tags tags={project.tags} />
            <ProjectLinks github={project.github} link={project.link} title={project.title} />
        </div>
    </Card>
)

const Project = ({ project }) => (
    <Card>
        <a href={project.link || project.github} target="_blank" rel="noopener noreferrer"
            className='w-full cursor-pointer overflow-hidden rounded-lg bg-white'>
            {project.img
                ? <Image src={withBase(project.img)} alt={project.title} width={1600} height={900} className='w-full h-auto'
                    sizes="(max-width: 768px) 100vw, 50vw" />
                : <TagPanel type={project.type} />}
        </a>
        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary dark:text-primaryDark font-medium text-lg'>{project.type}</span>
            <h2 className='my-2 w-full text-left text-2xl lg:text-3xl font-bold'>{project.title}</h2>
            <p className='font-medium text-dark/80 dark:text-light/80'>{project.summary}</p>
            <Tags tags={project.tags} />
            <ProjectLinks github={project.github} link={project.link} title={project.title} />
        </div>
    </Card>
)

const Projects = () => {
    const featured = projects.list.filter((p) => p.featured)
    const others = projects.list.filter((p) => !p.featured)

    return (
        <>
            <Head>
                <title>{`Projects | ${site.name}`}</title>
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='!pt-8 sm:!pt-16'>
                    <AnimatedText text={projects.headline} className='mb-12 sm:mb-16' />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-16 xl:gap-y-24'>
                        {featured.map((project) => (
                            <div key={project.title} className='md:col-span-2'>
                                <FeaturedProject project={project} />
                            </div>
                        ))}
                        {others.map((project) => (
                            <div key={project.title}>
                                <Project project={project} />
                            </div>
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects
