// app/page.jsx

import Proyects from '@/components/Proyects'
import Stack from '@/components/Stack'
import GithubActivity from '@/components/GithubActivity'

export const metadata = {
    title: 'Leonardo Axel Ortiz Zaragoza',
    description: 'Full Stack Developer | Computer Systems Engineer',
    lang: 'en',
}

export default function Page() {
    return (
        <>
            <Stack />
            <Proyects />
            <GithubActivity />
        </>
    )
}
