"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"

export default function Headline() {
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView && !isAnimated) {
      setIsAnimated(true)
    }
  }, [inView, isAnimated])

  return (
    <section
      className="flex  items-center bg-center md:bg-left-top"
      id="titulo"
    >
      <div className="container grid items-center gap-6 pb-8 pt-6 md:grid-cols-2 md:py-10">
        <div className="mb-0 flex max-w-[600px] flex-col items-start gap-2">
          <h2 className="mb-3 text-xl font-semibold text-white">
            O futuro está aqui...
          </h2>
          <h1
            ref={ref}
            className={`hero text-5xl font-extrabold  ${
              isAnimated ? "loaded" : "invisible"
            }`}
          >
            <span className="textline">
              Descubra o poder da Automação com IA para o seu negócio
            </span>
            <br className="hidden sm:inline" />
          </h1>
          <p className="mb-3 text-lg text-white">
            Obtenha respostas rápidas e personalizadas com nosso chatbot
          </p>
          <div className="flex gap-4">
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Saiba como funciona
            </Link>
          </div>
        </div>
        <div className="image-before flex items-center  justify-center">
          <Image
            src="/imagens/c.png" // Replace with the actual path to your image
            width={500}
            height={500}
            alt="Description of the image"
            className=""
            style={{transform: "scaleX(1)"}}
          />
        </div>
      </div>
    </section>
  )
}