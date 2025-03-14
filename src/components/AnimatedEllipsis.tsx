import React from 'react'

export default function AnimatedEllipsis({ ...props }) {
    return (
        <span {...props} className={'flex ' + props.className}>
            <span className="dot animate-dot1">.</span>
            <span className="dot animate-dot2">.</span>
            <span className="dot animate-dot3">.</span>
        </span>
    )
}
