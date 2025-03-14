// src/components/PageTransition.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
    children: ReactNode
}

const variants = {
    hidden: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait" initial={true}>
            <motion.div
                key={pathname}
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 0.3,
                }}
                className="flex-1"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
