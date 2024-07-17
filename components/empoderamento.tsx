"use client"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function Empoderamento() {
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  if (inView && !isAnimated) {
    setIsAnimated(true)
  }

  return (
    <div
      className="my-10 flex w-full flex-col items-center  md:flex-row md:space-x-10"
      id="Empoderamento"
    >
      <div className="flex w-full flex-col justify-center ">
        <h3
          className={`mb-10 text-center text-2xl font-bold md:text-left ${
            isAnimated ? "animate-slide-down" : "invisible"
          }`}
        >
          Resultados
        </h3>
        <p
          ref={ref}
          className={`mb-5 text-center text-gray-600 md:text-left ${
            isAnimated ? "animate-fade-in" : "invisible"
          }`}
        >
          Diferentes estudos para o tratamento via tDCS já foram realizados em
          aplicações terapêuticas nos campos neurológico, otorrinolaringológico
          e psiquiátrico e eles atestameficácia na melhoria de todas as
          condições listadas acima.
        </p>
        <p
          ref={ref}
          className={`mb-5 text-center text-gray-600 md:text-left ${
            isAnimated ? "animate-fade-in" : "invisible"
          }`}
        >
          Os principais efeitos de melhora variam de acordo com a doença, mas
          estão atrelados a melhorias na mobilidade e marcha, comunicação e
          socialização, redução de dor crônica e redução dos sintomas
          depressivos.{" "}
        </p>
      </div>
      <div className="flex w-full justify-center px-16 text-primary">
        <Image
          src={`/imagens/patient3.webp`}
          alt="paciente"
          className="h-full rounded-lg object-cover"
          width={500}
          height={500}
        />
      </div>
      {/* <GridImages src="patient3.webp" alt="paciente"></GridImages> */}
      {/* <CarouselDemo></CarouselDemo> */}
    </div>
  )
}
