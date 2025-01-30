'use client'

import Header from '@/components/Header'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Languages, Target, User } from 'lucide-react'

import cvData from '@/data/cvData_en.json'

// export const metadata = {
//     title: 'About Me - Leonardo Axel Ortiz Zaragoza',
//     description:
//         'Learn more about Leonardo Axel Ortiz Zaragoza, a Full Stack Developer and Computer Systems Engineering student',
// }

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    }

    return (
        <div className="space-y-12 pb-16">
            <Header data={cvData.header} />

            <motion.div
                className="mx-auto max-w-4xl px-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.section
                    variants={itemVariants}
                    className="mb-16 text-center"
                >
                    <h1 className="mb-6 text-4xl font-bold">About Me</h1>
                    <p className="text-xl leading-relaxed">{cvData.summary}</p>
                </motion.section>

                <motion.section variants={itemVariants} className="mb-16">
                    <h2 className="mb-6 flex items-center text-3xl font-semibold">
                        <Target className="mr-2" />
                        Professional Objective
                    </h2>
                    <p className="text-lg leading-relaxed">
                        {cvData.professionalObjective}
                    </p>
                </motion.section>

                <motion.section variants={itemVariants} className="mb-16">
                    <h2 className="mb-6 flex items-center text-3xl font-semibold">
                        <GraduationCap className="mr-2" />
                        Education
                    </h2>
                    {cvData.education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-xl font-medium">
                                {edu.institution}
                            </h3>
                            <p>{edu.degree}</p>
                            <a
                                href={edu.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                Learn more
                            </a>
                        </div>
                    ))}
                </motion.section>

                <motion.section variants={itemVariants} className="mb-16">
                    <h2 className="mb-6 flex items-center text-3xl font-semibold">
                        <User className="mr-2" />
                        Soft Skills
                    </h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        {cvData.softSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="rounded-lg bg-secondary p-4 text-center"
                            >
                                <p className="font-medium">{skill}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.section variants={itemVariants} className="mb-16">
                    <h2 className="mb-6 flex items-center text-3xl font-semibold">
                        <Languages className="mr-2" />
                        Languages
                    </h2>
                    <div className="flex justify-center space-x-8">
                        {cvData.languages.map((lang, index) => (
                            <div key={index} className="text-center">
                                <div className="mb-2 flex h-24 w-24 items-center justify-center rounded-full bg-primary">
                                    <span className="text-2xl font-bold">
                                        {lang.level}
                                    </span>
                                </div>
                                <p className="font-medium">{lang.language}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.section variants={itemVariants}>
                    <h2 className="mb-6 flex items-center text-3xl font-semibold">
                        <Briefcase className="mr-2" />
                        Work Philosophy
                    </h2>
                    <div className="rounded-lg bg-secondary p-6">
                        <p className="text-lg italic">
                            &quot;I believe in continuous learning,
                            collaborative problem-solving, and creating
                            innovative solutions that make a positive impact. My
                            goal is to contribute to projects that push the
                            boundaries of technology while fostering a culture
                            of creativity and excellence.&quot;
                        </p>
                    </div>
                </motion.section>
            </motion.div>
        </div>
    )
}
