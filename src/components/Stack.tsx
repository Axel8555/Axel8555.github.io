'use client'

import React, { useState, useEffect, JSX } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { techStack } from '@/data/techStack'
import { ScrollArea } from '@radix-ui/react-scroll-area'

const iconSize = 24

interface Item {
    name: string
    icon?: JSX.Element
    color?: string
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
            className="mt-4 min-w-fit overflow-auto"
        >
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {category.items.map((item) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card>
                            <CardContent className="flex items-center justify-center space-x-3 p-4">
                                {item.icon &&
                                    React.cloneElement(item.icon, {
                                        style: {
                                            color: item.color,
                                            fontSize: iconSize,
                                            minWidth: iconSize,
                                            minHeight: iconSize,
                                        },
                                    })}
                                <span className="whitespace-nowrap text-sm">
                                    {item.name}
                                </span>
                            </CardContent>
                        </Card>
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
        }, 5000)

        return () => clearInterval(interval)
    }, [activeTab, setActiveTab, tabContent])

    return (
        <section className="flex w-full max-w-full flex-row items-center justify-between space-x-4 py-4 pt-2">
            {/* Botón izquierdo con tamaño fijo */}
            <Button
                onClick={handlePrev}
                className="mt-0.5 self-start rounded-full"
                size="sm"
                variant="outline"
            >
                <FaArrowLeft size={20} />
            </Button>

            {/* Contenedor de Tabs ajustable */}
            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="max-w-[calc(100%-56px-56px)] flex-1" // Ajusta el ancho máximo restando 40px
            >
                {/* ScrollArea para el contenido desplazable */}
                <ScrollArea className="flex flex-1 overflow-x-auto rounded-lg">
                    <TabsList className="w-max flex-1 space-x-4">
                        {tabContent.map((category) => (
                            <TabsTrigger
                                key={category.name}
                                value={category.name}
                                className="min-w-[100px]" // Tamaño fijo para los botones
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

            {/* Botón derecho con tamaño fijo */}
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
