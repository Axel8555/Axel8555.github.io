'use client'

import React, { useState, useEffect, JSX } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { techStack } from '@/data/techStack'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import TechCard from '@/components/cards/TechCard'

interface Item {
    name: string
}

export interface Category {
    name: string
    items: Item[]
}

interface CategoryProps {
    category: Category
}

function CategoryContent({ category }: CategoryProps) {
    return (
        <TabsContent
            key={category.name}
            value={category.name}
            className="mt-4 min-h-fit min-w-fit overflow-hidden p-1"
        >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {category.items.map((item) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TechCard icon={item.name} />
                    </motion.div>
                ))}
            </div>
        </TabsContent>
    )
}

export interface TabsProps {
    activeTab: string
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
    tabContent: Category[]
}

export function CategoryTabs({
    activeTab,
    setActiveTab,
    tabContent,
}: TabsProps) {
    const handlePrev = () => {
        const categoryNames = tabContent.map((category) => category.name)
        const currentIndex = categoryNames.indexOf(activeTab)
        const prevIndex =
            (currentIndex - 1 + categoryNames.length) % categoryNames.length
        setActiveTab(categoryNames[prevIndex])
    }

    const handleNext = () => {
        const categoryNames = tabContent.map((category) => category.name)
        const currentIndex = categoryNames.indexOf(activeTab)
        const nextIndex = (currentIndex + 1) % categoryNames.length
        setActiveTab(categoryNames[nextIndex])
    }

    useEffect(() => {
        const categoryNames = tabContent.map((category) => category.name)
        let currentIndex = categoryNames.indexOf(activeTab)
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % categoryNames.length
            setActiveTab(categoryNames[currentIndex])
        }, 15000)

        return () => clearInterval(interval)
    }, [activeTab, setActiveTab, tabContent])

    return (
        <section className="flex w-full max-w-full flex-row items-center justify-between space-x-4 py-4 pt-2">
            <Button
                onClick={handlePrev}
                className="mt-0.5 self-start rounded-full"
                size="sm"
                variant="outline"
            >
                <FaArrowLeft size={20} />
            </Button>
            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="max-w-[calc(100%-56px-56px)] flex-1"
            >
                <ScrollArea className="flex flex-1 overflow-x-auto rounded-lg">
                    <TabsList className="w-max flex-1 space-x-4">
                        {tabContent.map((category) => (
                            <TabsTrigger
                                key={category.name}
                                value={category.name}
                                className="min-w-[100px]"
                            >
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </ScrollArea>
                {tabContent.map((category) => (
                    <CategoryContent key={category.name} category={category} />
                ))}
            </Tabs>
            <Button
                onClick={handleNext}
                className="mt-0.5 self-start rounded-full"
                size="sm"
                variant="outline"
            >
                <FaArrowRight size={20} />
            </Button>
        </section>
    )
}

export default function Stack() {
    const [activeTab, setActiveTab] = useState(techStack[0].name)

    return (
        <section className="space-y-6">
            <h2 className="text-center text-3xl font-semibold">Tech Stack</h2>
            <CategoryTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabContent={techStack}
            />
        </section>
    )
}
