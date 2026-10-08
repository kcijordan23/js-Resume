import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icon'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import { site } from '@/data/site'

const links = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/projects", title: "Projects" },
]

// Desktop link with an underline that grows on hover and stays on the current page
const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter()
    const active = router.pathname === href

    return (
        <Link href={href} className={`${className} relative group`} aria-current={active ? "page" : undefined}>
            {title}
            <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300 ${active ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const SocialLinks = ({ className = "" }) => {
    const items = [
        { href: site.social.github, label: "GitHub", Icon: GithubIcon },
        { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    ].filter((item) => item.href)

    return (
        <>
            {items.map(({ href, label, Icon }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}
                    className={`w-6 ${className}`}>
                    <Icon />
                </motion.a>
            ))}
        </>
    )
}

const ThemeToggle = ({ mode, toggle, className = "" }) => {
    return (
        <button type="button" onClick={toggle}
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`w-8 h-8 flex items-center justify-center rounded-full p-1 ${mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"} ${className}`}>
            {mode === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [mode, toggle] = useThemeSwitcher()
    const router = useRouter()

    // Close the mobile menu after navigating
    useEffect(() => {
        const close = () => setOpen(false)
        router.events.on('routeChangeStart', close)
        return () => router.events.off('routeChangeStart', close)
    }, [router.events])

    return (
        <header className='relative z-10 w-full px-6 py-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 font-medium flex items-center justify-between dark:text-light'>

            {/* Hamburger (phones and tablets) */}
            <button type="button" className='flex flex-col justify-center items-center lg:hidden'
                onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            {/* Desktop */}
            <nav className='hidden lg:block'>
                {links.map((link, i) => (
                    <CustomLink key={link.href} href={link.href} title={link.title}
                        className={i === 0 ? 'mr-4' : i === links.length - 1 ? 'ml-4' : 'mx-4'} />
                ))}
            </nav>
            <div className='hidden lg:flex items-center gap-6'>
                <SocialLinks />
                <ThemeToggle mode={mode} toggle={toggle} />
            </div>

            {/* Theme toggle stays visible on small screens */}
            <ThemeToggle mode={mode} toggle={toggle} className='lg:hidden' />

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className='lg:hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[85vw] max-w-sm py-24
                            flex flex-col items-center justify-center gap-8 rounded-lg
                            bg-dark/90 dark:bg-light/80 text-light dark:text-dark backdrop-blur-md'>
                        <nav className='flex flex-col items-center gap-4 text-lg'>
                            {links.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                                    className={router.pathname === link.href ? 'underline underline-offset-4' : ''}>
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                        <div className='flex items-center gap-6'>
                            <SocialLinks className='bg-light dark:bg-dark rounded-full p-0.5 text-dark dark:text-light' />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className='absolute left-1/2 top-2 -translate-x-1/2'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
