"use client"

import { useState } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

import ProfessionalImage from "./profisionalImage"
import { buttonVariants } from "./ui/button"

export default function CPA() {
  const [isAnimated, setIsAnimated] = useState(false)
  const professionals = [
    {
      id: 1,
      name: "Janna Battistella - CREFITO 3/ 19622 - TO",
      src: "/imagens/Janna.jpg",
      alt: "Profissional 1",
      history:
        "Terapeuta Ocupacional pela Universidade Federal de São Carlos (UFSCar), com especialização em Reabilitação Física e Neurológica pelo Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFMUSP/SP), pós graduação em Transtorno do Espectro Autista -TEA (CBI Miami), certificação em Neuromodulação Clínica pela Rede Napen (USP/SP) e em Neuromodulação periférica pela Universidade de São Paulo (USP). Atendimentos ao público com deficiência física e neurológica adulto e infantil.",
    },
    {
      id: 2,
      name: "Tatiane de Carvalho Lima - CREFITO 3/ 19441 - TO",
      src: "/imagens/Tatiane.jpg",
      alt: "Profissional 2",
      history:
        "Terapeuta Ocupacional pela Universidade Federal de São Carlos (UFSCar), com especialização em Saúde do Adulto e Idoso pelo Hospital Universitário e Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFMUSP/SP); especialização em Neuro Traumato Ortopedia pelo Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (IOT-HCFMUSP/SP) e certificação em Neuromodulação Clínica pela Rede Napen (USP/SP). Atendimentos ao público com deficiência física e neurológica adulto e infantil e gerontologia.",
    },
    // Adicione mais profissionais conforme necessário
  ]
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  if (inView && !isAnimated) {
    setIsAnimated(true)
  }
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundColor: "#001D24" }}
      id="profissionais"
    >
      <div className="container mx-auto  flex  flex-col items-center justify-center px-4">
        <h2
          ref={ref}
          className={`hero mb-10 text-4xl font-bold ${
            isAnimated ? "loaded" : "invisible"
          }`}
        >
          <span className="textline button" style={{ color: "#E5E9F6" }}>
            Profissionais
          </span>
        </h2>
        <div className="mb-10 flex flex-col items-center justify-center md:flex-row">
          {professionals.map((professional) => (
            <ProfessionalImage key={professional.id} {...professional} />
          ))}
        </div>
        
      </div>
    </section>
  )
}
