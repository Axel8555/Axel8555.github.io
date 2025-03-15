'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, Terminal } from 'lucide-react'
import Languages from './Languages'
import { ModeToggle } from './ModeToggle'
import { LuGithub, LuLinkedin } from 'react-icons/lu'
import AnimatedEllipsis from './AnimatedEllipsis'
import { usePathname } from 'next/navigation'

export default function Page({
    data,
}: {
    data: {
        name: string
        title: string
    }
}) {
    const pathname = usePathname()
    return (
        <>
            <div className="flex items-center justify-center gap-4 md:justify-end">
                <Languages />
                <ModeToggle />
            </div>
            <header className="flex flex-col items-center justify-center gap-6 space-y-8 md:flex-row md:justify-between">
                <div className="space-y-4 text-center md:text-left">
                    <h1 className="bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                        Leonardo Axel Ortiz
                    </h1>
                    <p className="text-xl text-slate-950 dark:text-slate-50">
                        Fullstack Developer & Computer Systems Engineer
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                        <Link href="https://github.com/Axel8555" passHref>
                            <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full"
                            >
                                <LuGithub className="mr-2 h-4 w-4" />
                                GitHub
                            </Button>
                        </Link>
                        <Link href="https://linkedin.com/in/laoz8555" passHref>
                            <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full"
                            >
                                <LuLinkedin className="mr-2 h-4 w-4" />
                                LinkedIn
                            </Button>
                        </Link>
                        <Link
                            href="mailto:leonardoaxelortiz@gmail.com"
                            passHref
                        >
                            <Button
                                size="sm"
                                variant="outline"
                                className="rounded-full"
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                Email
                            </Button>
                        </Link>
                        {pathname === '/' ? (
                            <Button
                                size="sm"
                                variant="default"
                                className="rounded-full border border-secondary"
                                asChild
                            >
                                <Link
                                    href="/about-me"
                                    rel="noopener noreferrer"
                                >
                                    More About Me
                                    <AnimatedEllipsis className="mb-[0.5rem] ml-[-0.25rem] h-4 w-4" />
                                </Link>
                            </Button>
                        ) : (
                            <Button
                                size="sm"
                                variant="default"
                                className="rounded-full border border-secondary"
                                asChild
                            >
                                <Link href="/" rel="noopener noreferrer">
                                    <Terminal className="mr-2 h-4 w-4" />
                                    Home
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src="/photo.jpg"
                        alt="Leonardo Axel Ortiz"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-indigo-400 shadow-lg"
                    />
                    <span className="absolute bottom-0 right-0 rounded-full border-2 bg-zinc-100 p-2 shadow-md dark:bg-black">
                        <Terminal className="h-6 w-6 text-zinc-900 dark:text-white" />
                    </span>
                </div>
            </header>
        </>
    )
}
