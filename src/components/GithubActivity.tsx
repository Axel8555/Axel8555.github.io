import Image from 'next/image'
import { Card, CardContent } from './ui/card'

export default function GithubActivity() {
    return (
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
    )
}
