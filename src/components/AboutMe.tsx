import { User, Book, Heart } from 'lucide-react'
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card'

export default function AboutMe() {
    return (
        <Card className="space-y-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>Learn more about me</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="mb-4 flex items-center">
                    <User className="mr-2" />
                    <span>
                        I&apos;m Axel, a web developer with a passion for
                        creating efficient and scalable applications.
                    </span>
                </div>
                <div className="mb-4 flex items-center">
                    <Heart className="mr-2" />
                    <span>
                        My interests include artificial intelligence, interface
                        design, and music.
                    </span>
                </div>
                <div className="flex items-center">
                    <Book className="mr-2" />
                    <span>
                        I studied Systems Engineering at XYZ University.
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}
