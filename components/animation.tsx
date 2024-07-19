
"use client"

import React, { useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimationProps{
    children: React.ReactNode
    animation: string
    threshold?: number
}

export default function Animation({children, animation, threshold= 0.5}: AnimationProps){ 
    const [isVisible, setIsVisible] = useState(false)

    const { ref, inView } = useInView({
      threshold: threshold, // Trigger animation when 50% of the section is in view
      triggerOnce: true, // Only trigger once
    })
  
    if (inView && !isVisible) {
      setIsVisible(true)
    }
    return (
        <div ref={ref} className={` ${isVisible ? animation : "invisible"}`}>
            {children}
        </div>
    )
}