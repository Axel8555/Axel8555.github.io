import React from 'react'
import { IconBaseProps, IconType } from 'react-icons'
import { BsGraphUpArrow } from 'react-icons/bs'
import { DiMsqlServer } from 'react-icons/di'
import {
    FaAws,
    FaCss3,
    FaDocker,
    FaFigma,
    FaGit,
    FaHtml5,
    FaJava,
    FaPython,
    FaTrello,
} from 'react-icons/fa'
import { FaC, FaComputer, FaGolang, FaReact } from 'react-icons/fa6'
import { IoFileTrayStackedSharp } from 'react-icons/io5'
import { LuGithub } from 'react-icons/lu'
import { MdDns, MdHttp } from 'react-icons/md'
import { RiFileExcel2Fill, RiNextjsFill } from 'react-icons/ri'
import {
    SiCisco,
    SiGraphql,
    SiHasura,
    SiJavascript,
    SiKnime,
    SiNumpy,
    SiPandas,
    SiPostgresql,
    SiTypescript,
} from 'react-icons/si'
import { TbLogs } from 'react-icons/tb'
import { VscAzure, VscTerminalLinux } from 'react-icons/vsc'

const iconMapping: Record<string, { Icon: IconType; color?: string }> = {
    CSS: { Icon: FaCss3, color: '#1572B6' },
    HTML: { Icon: FaHtml5, color: '#E44D26' },
    Python: { Icon: FaPython, color: '#FFD43B' },
    JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
    TypeScript: { Icon: SiTypescript, color: '#007ACC' },
    React: { Icon: FaReact, color: '#61DAFB' },
    'Next.js': { Icon: RiNextjsFill },
    Golang: { Icon: FaGolang, color: '#00ADD8' },
    Java: { Icon: FaJava, color: '#FF4500' },
    C: { Icon: FaC, color: '#A8B9CC' },
    GraphQL: { Icon: SiGraphql, color: '#E10098' },
    Hasura: { Icon: SiHasura, color: '#1EB4D4' },
    REST: { Icon: MdHttp, color: '#00A896' },
    'MSSQL Server': { Icon: DiMsqlServer, color: '#CC2927' },
    PostgreSQL: { Icon: SiPostgresql, color: '#336791' },
    Docker: { Icon: FaDocker, color: '#2496ED' },
    Linux: { Icon: VscTerminalLinux, color: '#FCC624' },
    'Microsoft Azure': { Icon: VscAzure, color: '#0078D4' },
    'Amazon Web Services': { Icon: FaAws, color: '#FF9900' },
    DHCP: { Icon: FaComputer, color: '#FF5733' },
    DNS: { Icon: MdDns, color: '#33FF57' },
    FTP: { Icon: IoFileTrayStackedSharp, color: '#3357FF' },
    SNMP: { Icon: TbLogs, color: '#FF33A1' },
    GNS3: { Icon: FaComputer, color: '#FF8C00' },
    'Cisco Packet Tracer': { Icon: SiCisco, color: '#1BA0D7' },
    Git: { Icon: FaGit, color: '#F05032' },
    GitHub: { Icon: LuGithub },
    Figma: { Icon: FaFigma, color: '#A259FF' },
    Trello: { Icon: FaTrello, color: '#0079BF' },
    KNIME: { Icon: SiKnime, color: '#F7B500' },
    Excel: { Icon: RiFileExcel2Fill, color: '#217346' },
    'Power BI': { Icon: BsGraphUpArrow, color: '#F2C811' },
    Pandas: { Icon: SiPandas, color: '#150458' },
    Numpy: { Icon: SiNumpy, color: '#013243' },
}

export interface IconMapperProps extends IconBaseProps {
    icon: string
    size?: number
}

export function IconMapper({ icon, size = 24, ...props }: IconMapperProps) {
    const mapping = iconMapping[icon]
    if (!mapping) return null
    const { Icon, color } = mapping
    return (
        <Icon
            style={{ color, fontSize: size, minWidth: size, minHeight: size }}
            aria-hidden="true"
            {...props}
        />
    )
}

export default IconMapper
