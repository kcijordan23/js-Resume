import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

// Circle on the timeline line that fills in as you scroll past it
const LiIcon = ({ reference }) => {
    const { scrollYProgress } = useScroll({ target: reference, offset: ["center end", "center center"] })
    return (
        <figure className='absolute left-0 stroke-dark dark:stroke-light'>
            <svg className='-rotate-90 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20' width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="75" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' />
                <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-light dark:fill-dark'
                    style={{ pathLength: scrollYProgress }} />
                <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark' />
            </svg>
        </figure>
    )
}

const TimelineItem = ({ item }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] sm:w-[70%] mx-auto flex flex-col items-start justify-between'>
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, type: "spring" }}>
                <h3 className='font-bold text-lg sm:text-xl md:text-2xl'>
                    {item.title}
                    {item.subtitle && (
                        item.subtitleLink
                            ? <> @<a href={item.subtitleLink} target="_blank" rel="noopener noreferrer" className='text-primary dark:text-primaryDark'>{item.subtitle}</a></>
                            : <> @<span className='text-primary dark:text-primaryDark'>{item.subtitle}</span></>
                    )}
                </h3>
                <span className='font-medium text-dark/75 dark:text-light/75 text-sm sm:text-base'>
                    {[item.time, item.place].filter(Boolean).join(" | ")}
                </span>
                {item.text && <p className='font-medium w-full text-sm md:text-base mt-1'>{item.text}</p>}
            </motion.div>
        </li>
    )
}

// Vertical timeline whose line draws itself as you scroll (used for Experience and Education)
const Timeline = ({ heading, items = [] }) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center start"] })

    if (!items.length) return null

    return (
        <section className='my-32 sm:my-48'>
            <h2 className='font-bold text-5xl md:text-6xl lg:text-7xl mb-16 sm:mb-24 w-full text-center'>{heading}</h2>
            <div ref={ref} className='w-full md:w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }}
                    className='absolute left-[22px] sm:left-[30px] md:left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top' />
                <ul className='w-full flex flex-col items-start justify-between ml-2 sm:ml-4'>
                    {items.map((item, i) => <TimelineItem key={i} item={item} />)}
                </ul>
            </div>
        </section>
    )
}

export default Timeline
