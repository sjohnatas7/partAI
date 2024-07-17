import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

export default function OQue() {
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação é acionada apenas uma vez
    threshold: 0.2, // Define a porcentagem de visibilidade necessária para disparar a animação
  })

  // Define a animação apenas quando o elemento estiver visível na tela
  if (inView && !isAnimated) {
    setIsAnimated(true)
  }

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 ">
      <div className="mb-5 flex w-full items-center md:w-1/3 md:items-start">
        <Image
          src="/imagens/comoFunciona.webp"
          alt="Imagem"
          className="rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="flex w-full flex-col justify-center md:w-2/3">
        <h3
          className={`mb-5 text-center text-2xl font-bold md:text-left ${
            isAnimated ? "animate-slide-down" : "invisible"
          }`}
        >
          Como funciona?
        </h3>
        {/* Aplica a classe de animação se o elemento estiver visível */}
        <p
          ref={ref}
          className={`mb-5 text-center text-gray-600 md:text-left ${
            isAnimated ? "animate-fade-in" : "invisible"
          }`}
        >
          A Estimulação Transcraniana por Corrente Contínua - ETCC, em inglês,
          Transcranial Direct Current Stimulation - tDCS, é uma técnica de
          neuromodulação segura, não invasiva, que estimula a atividade
          cerebral, promovendo mudanças no sistema nervoso a partir de uma
          corrente elétrica de baixa intensidade na área alvo do cérebro, de
          acordo com os objetivos de cada paciente.{" "}
        </p>
        <p
          ref={ref}
          className={`mb-5 text-center text-gray-600 md:text-left ${
            isAnimated ? "animate-fade-in" : "invisible"
          }`}
        >
          Os protocolos são realizados partir da avaliação clínica de cada
          paciente e no seu diagnóstico e o número de sessões e atividades
          realizadas em cada protocolo é definido de acordo com a busca na
          literatura científica do método mais eficaz. Antes de prosseguirmos
          com o protocolo de neuromodulação, é discutido e alinhado com cada
          paciente ou seu responsável sobre o procedimento, seus riscos e
          benefícios.{" "}
        </p>
        <div className="flex justify-center md:justify-start">
        <a
          className={buttonVariants({
            size: "icon",
            variant: "outline",
          })}
          href={siteConfig.links.whatsapp}
          style={{width: "200px", cursor: "pointer"}}
        >
          Saiba Mais
        </a>
        </div>
      </div>
    </div>
  )
}
