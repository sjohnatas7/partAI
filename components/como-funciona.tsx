import React from "react"
import Image from "next/image"
import {
  faMoneyBill,
  faTrophy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ComoFunciona = ({id}: {id?: string}) => {
  const steps = [
    {
      title: "Economize tempo e dinheiro",
      description:
        "Nosso chatbot reduz custos e aumenta a eficiência do atendimento.",
      icon: faMoneyBill,
    },
    {
      title: "Aumente a satisfação do cliente",
      description:
        "Nosso chatbot fornece experiências personalizadas e rápidas, aumentando a satisfação do cliente.",
      icon: faTrophy,
    },
    {
      title: "Time Qualificado",
      description:
        "Nosso time é formado por especialistas das mais novas tecnologias de Inteligência Artficial e Engenharia de Prompt.",
      icon: faUsers,
    },
  ]

  return (
    <section className="bg-background py-20" id={id}>
      <h2 className="mb-6 text-center text-4xl font-bold text-primary ">
        Por que escolher nosso ChatBot?
      </h2>
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        <div className=" mb-10 flex justify-center md:mb-0 md:w-1/2">
          <div className="blur-content">
            <Image
              src="/imagens/t.png"
              width={400}
              height={400}
              alt="quebra-cabeca"
              className=""
            ></Image>
          </div>
        </div>
        <div className="image-before content space-y-8 md:w-1/2">
          {steps.map((step, index) => (
            <div key={index} className="mb-10 flex items-start space-x-4">
              <FontAwesomeIcon
                icon={step.icon}
                size="3x"
                className="text-primary"
              />
              <div>
                <h3 className="text-2xl font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-lg text-primary opacity-50">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona
