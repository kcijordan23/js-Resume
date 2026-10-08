import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '@/components/Layout'
import { site } from '@/data/site'

export default function NotFound() {
    return (
        <>
            <Head>
                <title>{`Page not found | ${site.name}`}</title>
            </Head>
            <main className='w-full flex items-center justify-center min-h-[60vh]'>
                <Layout className='text-center'>
                    <h1 className='font-bold text-6xl sm:text-8xl'>404</h1>
                    <p className='mt-4 text-lg font-medium'>That page doesn&apos;t exist.</p>
                    <Link href="/" className='inline-block mt-8 rounded-lg bg-dark text-light dark:bg-light dark:text-dark py-2.5 px-6 text-lg font-semibold'>
                        Back to home
                    </Link>
                </Layout>
            </main>
        </>
    )
}
