"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"

import OQue from "./oque"

export default function ExplicacaoSection() {
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação é acionada apenas uma vez
    threshold: 0.1, // Define a porcentagem de visibilidade necessária para disparar a animação
  })

  // Define a animação apenas quando o elemento estiver visível na tela
  if (inView && !isAnimated) {
    setIsAnimated(true)
  }

  return (
    <section className="container mx-auto py-16" id="como-funciona">
      <div ref={ref} className="grid grid-cols-1 gap-8 ">
        <div className={`text-center`}>
          <h2
            style={{ display: "inline-block" }}
            className={`hero mb-3 px-0 text-center text-3xl  font-bold md:text-4xl ${
              isAnimated ? "loaded" : "invisible"
            }`}
          >
            <span className="textline">RECONECTO E A NEUROMODULAÇÃO</span>
          </h2>
        </div>
          <OQue></OQue>
      </div>
    </section>
  )
}
