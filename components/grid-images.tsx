'use client'
import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

// Defina a interface corretamente
interface TImage {
  src: string,
  alt: string
}

// Utilize a interface diretamente como parâmetro da função
export default function GridImages({ src, alt }: TImage) {
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  if (inView && !isAnimated) {
    setIsAnimated(true)
  }

  return (
      <Image
        src={`/imagens/${src}`}
        alt={alt}
        className="h-full rounded-lg object-cover"
        width={250}
        height={250} 
      />
  )
}
