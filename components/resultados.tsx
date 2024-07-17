"use client"

import { useState } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

import { Icons } from "@/components/icons"

import GridImages from "./grid-images"
import { buttonVariants } from "./ui/button"
import { siteConfig } from "@/config/site"

export default function Resultados() {
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  if (inView && !isAnimated) {
    setIsAnimated(true)
  }

  return (
    <div className="mb-10 flex flex-col items-center text-left md:flex-row  md:space-x-10">
      <div className="mb-10 flex w-full flex-col justify-center ">
        <h3
          ref={ref}
          className={`mb-5 text-center text-gray-600 md:text-left ${
            isAnimated ? "animate-fade-in" : "invisible"
          }`}
        >
          A NEUROMODULAÇÃO É INDICADA PARA DIVERSAS CONDIÇÕES
        </h3>
        <p
          ref={ref}
          className={`mb-5 text-center text-gray-600 md:text-left ${
            isAnimated ? "animate-fade-in" : "invisible"
          }`}
        >
          Evidências científicas mostram que a técnica de Estimulação
          Transcraniana por Corrente Contínua - tDCS, pode ser utilizada em
          disfunções motoras e neurológicas, déficits no neurodesenvolvimento,
          dor, distúrbios do movimento e de linguagem, saúde mental, entre
          outros, a partir de uma avaliação especializada para que a aplicação
          seja feita de forma segura e sem riscos ao paciente
        </p>
        <h4
          ref={ref}
          className={`mb-5 text-center text-gray-600 md:text-left ${
            isAnimated ? "animate-fade-in" : "invisible"
          }`}
        >
          Alguns exemplos de diagnóstico são:
        </h4>
        <ul className="ml-6 mt-2 list-disc text-center text-muted md:text-start">
          <li>Acidente Vascular Cerebral</li>
          <li>Autismo</li>
          <li>Dor Crônica</li>
          <li>Doença de Parkinson</li>
          <li>Lesão Medular</li>
          <li>Depressão e Ansiedade</li>
          <li>Fibromialgia</li>
          <li>Entre outros</li>
        </ul>
        <div className="flex justify-center md:justify-start">
          <a
            className={`mt-5 ${buttonVariants({
              size: "icon",
              variant: "outline",
            })}`}
            href={siteConfig.links.whatsapp}
            style={{ width: "200px", cursor: "pointer" }}
          >
            Saiba Mais
          </a>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-4 sm:px-16 md:w-1/2 md:grid-cols-1 md:px-12 lg:size-full lg:grid-cols-2 lg:px-8">
        <GridImages
          src="Indicações/Autismo-1.webp"
          alt="Criança com autismo"
        ></GridImages>
        <GridImages
          src="Indicações/Autismo-2.webp"
          alt="Criança com autismo"
        ></GridImages>
        <GridImages src="Indicações/AVC.webp" alt="AVC"></GridImages>
        <GridImages
          src="Indicações/Paraplegia.webp"
          alt="Paraplegia"
        ></GridImages>
      </div>
    </div>
  )
}
