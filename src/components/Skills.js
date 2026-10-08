import React from 'react'
import { motion } from 'framer-motion'

const Skills = ({ skills = [] }) => {
    if (!skills.length) return null

    return (
        <section className='mt-32 sm:mt-48'>
            <h2 className='font-bold text-5xl md:text-6xl lg:text-7xl w-full text-center mb-12'>Skills</h2>
            <ul className='flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto'>
                {skills.map((skill, i) => (
                    <motion.li key={skill}
                        className='rounded-full font-semibold py-2 px-5 sm:py-3 sm:px-6 text-sm sm:text-base
                            bg-dark text-light dark:bg-light dark:text-dark shadow-md cursor-default'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.05 } }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}>
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Skills
