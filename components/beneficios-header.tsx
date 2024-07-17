"use client"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

export default function BeneficiosHeader(){
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  if (inView && !isAnimated) {
    setIsAnimated(true)
  }
    return (<h2 ref={ref} className={`hero mb-6  text-center text-4xl font-bold ${
        isAnimated ? "loaded" : "invisible"
      }`} style={{display:'inline-block'}}><span className="textline">Indicações</span></h2>)
}