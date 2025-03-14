'use client'

import { Briefcase, GraduationCap, Languages, Target, User } from 'lucide-react'

import cvData from '@/data/cvData_en.json'

// export const metadata = {
//     title: 'About Me - Leonardo Axel Ortiz Zaragoza',
//     description:
//         'Learn more about Leonardo Axel Ortiz Zaragoza, a Full Stack Developer and Computer Systems Engineering student',
// }

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-4xl space-y-12 px-4 pb-16">
            <section className="mb-16 text-center">
                <h1 className="mb-6 text-4xl font-bold">About Me</h1>
                <p className="text-xl leading-relaxed">{cvData.summary}</p>
            </section>

            <section className="mb-16">
                <h2 className="mb-6 flex items-center text-3xl font-semibold">
                    <Target className="mr-2" />
                    Professional Objective
                </h2>
                <p className="text-lg leading-relaxed">
                    {cvData.professionalObjective}
                </p>
            </section>

            <section className="mb-16">
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
            </section>

            <section className="mb-16">
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
            </section>

            <section className="mb-16">
                <h2 className="mb-6 flex items-center text-3xl font-semibold">
                    <Languages className="mr-2" />
                    Languages
                </h2>
                <div className="flex justify-center space-x-8">
                    {cvData.languages.map((lang, index) => (
                        <div key={index} className="text-center">
                            <div className="mb-2 flex h-24 w-24 items-center justify-center rounded-full bg-primary shadow-lg">
                                <span className="text-2xl font-bold text-secondary">
                                    {lang.level}
                                </span>
                            </div>
                            <p className="font-medium">{lang.language}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="mb-6 flex items-center text-3xl font-semibold">
                    <Briefcase className="mr-2" />
                    Work Philosophy
                </h2>
                <div className="rounded-lg bg-secondary p-6">
                    <p className="text-lg italic">
                        &quot;I believe in continuous learning, collaborative
                        problem-solving, and creating innovative solutions that
                        make a positive impact. My goal is to contribute to
                        projects that push the boundaries of technology while
                        fostering a culture of creativity and excellence.&quot;
                    </p>
                </div>
            </section>
        </div>
    )
}
