'use client'

import { motion } from 'framer-motion'
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Project {
    title: string
    link?: string
    description: string
    techStack: string[]
}

const projects: Project[] = [
    {
        title: 'Inventory Management System',
        description:
            'Developed an inventory management system with Next.js for the frontend and GraphQL. Used Hasura to map the MSSQL database to GraphQL and manage remote schemas. Created an API in Golang with GraphQL to perform custom mutations with advanced business logic. Utilized Hasura to transform REST requests into usable GraphQL mutations, using Hasura Actions to transform the payload.',
        techStack: ['Next.js', 'GraphQL', 'Hasura', 'Golang', 'MSSQL'],
    },
    {
        title: 'Thermal Label Generation and Printing System',
        description:
            'Developed a system for generating and printing thermal labels using Python PIL (QR, DataMatrix, Code128). Created an endpoint with FastAPI and used brother_ql for rasterizing and sending commands to the thermal printer.',
        techStack: ['Python', 'PIL', 'FastAPI', 'brother_ql'],
    },
    {
        title: 'Cloud Technologies',
        description:
            'Managed cloud environments using virtual machines, Azure Functions, load balancing, and distributed systems on Microsoft Azure and AWS.',
        techStack: ['Azure', 'AWS', 'Distributed Systems'],
    },
    {
        title: 'On-premise Server Management',
        description:
            'Managed on-premise servers (Dell R360) to deploy web services and applications, ensuring efficient and secure hosting for various services.',
        techStack: ['Dell R360', 'Web Services'],
    },
    {
        title: 'Data Normalization, Transformation, and Visualization',
        description:
            'Normalized and transformed Excel data formats using Power Query and presented interactive dashboards via Power BI.',
        techStack: ['Power Query', 'Power BI'],
    },
    {
        title: 'Networking',
        description:
            'Designed and configured network topologies using Cisco Layer 3 routers and switches, along with virtual machines in GNS3. Configured network services such as DHCP, DNS, FTP, and SNMP on Linux platforms. Simulated network infrastructures in Cisco Packet Tracer, applying routing and switching protocols such as OSPF and EIGRP.',
        techStack: [
            'Cisco',
            'GNS3',
            'Packet Tracer',
            'DHCP',
            'DNS',
            'OSPF',
            'EIGRP',
        ],
    },
    {
        title: 'First place at Expo ESCOM 2023',
        description:
            'Software Engineering - CircuitToolbox.com. Developed a web platform with electronic utilities and calculators using Next.js for the frontend. Created a backend microservice in Golang, utilizing TCP sockets for communication. Successfully deployed on AWS.',
        techStack: ['Next.js', 'Golang', 'TCP', 'AWS'],
    },
    {
        title: 'Design of a 32-bit Monocycle Processor',
        description:
            'RISC-V Architecture with Intel Quartus. Designed a 32-bit monocycle processor with RISC-V architecture using Intel Quartus. Successfully tested the design on an FPGA.',
        techStack: ['RISC-V', 'Intel Quartus', 'FPGA'],
    },
    {
        title: 'Encryption and Decryption Tools',
        description:
            'AES and RSA algorithms. Developed tools for file encryption, applying AES and RSA algorithms for data protection, digital signing, and verification. Semifinalist at Hackathon Talent Land 2023.',
        techStack: ['AES', 'RSA'],
    },
    {
        title: 'Track Salud Digna',
        description:
            'Developed a system using ChatGPT 3.5 API to recommend healthy recipes and facilitate communication with nutritionists. Integrated a database of ingredients and recipes for accurate dietary recommendations.',
        techStack: ['ChatGPT 3.5 API', 'Database'],
    },
    {
        title: 'Wireless Voltmeter with Web Interface',
        description:
            'Designed a voltage sensor (0V - 60V). Used a PIC16F628A microcontroller. Developed a microservice for Bluetooth communication and built a web interface using Next.js.',
        techStack: ['Next.js', 'PIC16F628A'],
    },
    {
        title: 'DSPIC-Controlled Cannon with Android App',
        description:
            'Designed and programmed a cannon controlled via a DSPIC microcontroller. Created an Android app for Bluetooth-based control of the cannon.',
        techStack: ['DSPIC', 'Android', 'Bluetooth'],
    },
    {
        title: 'Pseudo-translator with Error Detection',
        description:
            'Built a translation system using Next.js and Python with Levenshtein distance for error detection and correction. Implemented data storage using PostgreSQL 15.',
        techStack: ['Next.js', 'Python', 'PostgreSQL'],
    },
    {
        title: 'Plant Catalog and Care Application',
        description:
            'Developed an Android app in Java that provides detailed care instructions for various plant species.',
        techStack: ['Android', 'Java'],
    },
    {
        title: 'E-commerce Website',
        description:
            'Designed and documented a fictional e-commerce platform for a car dealership.',
        techStack: ['E-commerce'],
    },
    {
        title: 'Discord Bot Development',
        description:
            'Created a Discord bot in Node.js that processes text and generates voice responses via an API.',
        techStack: ['Node.js', 'Discord API'],
    },
]

export default function Proyects() {
    return (
        <section className="space-y-6 pb-8">
            <h2 className="text-center text-3xl font-semibold">
                Featured Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="flex h-full flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-start justify-between">
                                    {project.title}
                                    {project.link && (
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full"
                                            asChild
                                        >
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="h-5 w-5" />
                                            </Link>
                                        </Button>
                                    )}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="mb-auto space-y-4">
                                <p className="mb-auto text-muted-foreground">
                                    {project.description}
                                </p>
                            </CardContent>
                            <CardFooter className="flex max-h-fit flex-grow flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
