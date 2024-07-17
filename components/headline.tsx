"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function Headline() {
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  if (inView && !isAnimated) {
    setIsAnimated(true)
  }
  return (
    <section
      className="flex min-h-screen items-center bg-center md:bg-left-top"
      style={{
        backgroundImage: 'url("/imagens/heroImage.jpg")',
        backgroundSize: "cover",
      }}
      id="titulo"
    >
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="mb-0 flex max-w-[600px] flex-col items-start gap-2">
          <h1
            ref={ref}
            className={`hero text-5xl font-extrabold  ${
              isAnimated ? "loaded" : "invisible"
            }`}
          >
            <span className="textline">
              Obtenha o seu seguro perfeito com uma cotação personalizada
            </span>
            <br className="hidden sm:inline" />
          </h1>
          <h2 className="mb-3 text-xl font-semibold text-white">
            Encontre a melhor opção para você e sua família com nossa ferramenta
            de cotação fácil e rápida
          </h2>
          <p className="mb-3 text-lg text-white">
            Você merece ter a certeza de que você e seus entes queridos estão
            protegidos. Com nossa ferramenta de cotação, você pode comparar
            opções de seguro e encontrar a melhor cobertura para o seu estilo de
            vida.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Obtenha sua cotação agora
          </Link>
      </div>
      </div>
    </section>
  )
}
