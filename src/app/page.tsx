// app/page.jsx

import Header from '@/components/Header'
import Proyects from '@/components/Proyects'
import Stack from '@/components/Stack'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import cvData from '@/data/cvData_en.json'

export const metadata = {
    title: 'Leonardo Axel Ortiz Zaragoza',
    description: 'Full Stack Developer | Computer Systems Engineer',
    lang: 'en',
}

export default function Page() {
    return (
        <>
            <Header data={cvData.header} />
            <Stack></Stack>
            <Proyects></Proyects>
            <section className="space-y-6">
                <h2 className="text-center text-3xl font-semibold">
                    GitHub Activity
                </h2>
                <Card>
                    <CardContent className="p-4">
                        <Image
                            src="https://ghchart.rshah.org/Axel8555"
                            alt="GitHub Contribution Graph"
                            width={800}
                            height={200}
                            className="w-full"
                        />
                    </CardContent>
                </Card>
            </section>
        </>
    )
}
