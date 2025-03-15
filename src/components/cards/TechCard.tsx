import React from 'react'
import { Card, CardContent } from '@components/ui/card'
import IconMapper from '@components/IconMapper'

export default function TechCard({
    icon,
    name,
}: {
    icon: string
    name?: string
}) {
    return (
        <Card>
            <CardContent className="flex items-center justify-center space-x-3 p-4">
                <IconMapper icon={icon} size={24} />
                <span className="truncate whitespace-nowrap text-sm">
                    {name ?? icon}
                </span>
            </CardContent>
        </Card>
    )
}
