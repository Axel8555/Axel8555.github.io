import React from 'react'

//bg-[linear-gradient(-60deg,var(--color-ternary)_50%,var(--color-primary)_50%)]
// rotate-45
// bg-gradient-to-r from-white via-white to-sky-400
export default function Background() {
    return (
        <>
            {/* <div className="bg-black fixed top-0 bottom-0 left-0 right-0 z-[-2] "></div> */}
            <div
                className={
                    'fixed bottom-0 left-[-50%] right-[-50%] top-0 z-[-1] animate-slide-1 bg-gradient-to-br from-white to-indigo-200 dark:from-indigo-900 dark:to-indigo-985'
                }
            />
        </>
    )
}
