import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import { site } from '@/data/site'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-base sm:text-lg'>
            <Layout className='!py-8'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-4 text-center'>
                    <span>{year} &copy; {site.company}. All rights reserved.</span>
                    <span>{site.name} &middot; {site.role}</span>
                    <Link href={`mailto:${site.email}`} className='underline underline-offset-2'>Say hello</Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer
