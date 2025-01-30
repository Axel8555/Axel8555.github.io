// app/layout.jsx

import { ReactNode } from 'react'
import '@/styles/globals.css'
import '@/styles/font-styles.css'
import Background from '@/components/Background'
import { ThemeProvider } from '@/components/ThemeProvider'
import PageTransition from '@/components/PageTransition'

export const metadata = {
    title: 'Leonardo Axel Ortiz Zaragoza',
    description: 'Full Stack Developer | Computer Systems Engineer',
    icons: {
        icon: '/favicon.png',
        appleIcon: '/favicon.png',
    },
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Background />
                    <div className="flex flex-col gap-4 px-[10%] py-8">
                        <PageTransition>{children}</PageTransition>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
