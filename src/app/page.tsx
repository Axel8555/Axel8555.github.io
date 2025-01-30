// app/page.jsx

import Header from '@/components/Header'
import Proyects from '@/components/Proyects'
import Stack from '@/components/Stack'
import GithubActivity from '@/components/GithubActivity'
import cvData from '@/data/cvData_en.json'
import Link from 'next/link'

export const metadata = {
    title: 'Leonardo Axel Ortiz Zaragoza',
    description: 'Full Stack Developer | Computer Systems Engineer',
    lang: 'en',
}

export default function Page() {
    return (
        <>
            <Header data={cvData.header} />
            <Stack />
            <Proyects />
            <GithubActivity />
        </>
    )
}
