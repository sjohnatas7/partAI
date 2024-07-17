"use client"

import React, { useState } from "react"
import {
  IconDefinition,
  faBalanceScale,
  faClock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useInView } from "react-intersection-observer";

interface BenefitProps {
  title: string
  description: string
  icon: IconDefinition
}

const Benefit = ({ title, description, icon }: BenefitProps) => {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border p-4 text-center shadow-md"
      style={{
        transformOrigin: "bottom left",
        transform: isHovered ? "rotate(-2deg)" : "rotate(0)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FontAwesomeIcon icon={icon} size="4x" className="m-5 text-primary" />
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  )
}

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 20% of the section is in view
    triggerOnce: true, // Only trigger once
  });
  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return(
  <section className="bg-gray-50 py-20" id="vantagens"
  >
    <div className="container mx-auto px-4">
      <h2 className="mb-10 text-center text-3xl font-bold text-primary">
        Por que escolher nossa ferramenta de cotação?
      </h2>
      <div className={`grid gap-6 md:grid-cols-3 ${isVisible ? "animate-slide-down" : "invisible"}`} ref={ref}>
        <Benefit
          title="Comparação fácil de opções de seguro"
          description="Com nossa ferramenta, você pode comparar opções de seguro de diferentes empresas em apenas alguns minutos."
          icon={faBalanceScale}
        />
        <Benefit
          title="Cotação personalizada para você"
          description="Nossa ferramenta leva em conta suas necessidades específicas para fornecer uma cotação personalizada."
          icon={faClock}
        />
        <Benefit
          title="Economize tempo e dinheiro"
          description="Com nossa ferramenta, você pode economizar tempo e dinheiro ao encontrar a melhor opção de seguro para você."
          icon={faMoneyBillWave}
        />
      </div>
      <div className="mt-8 text-center">
        <button className="mt-2 rounded-full bg-primary px-6 py-3 font-semibold text-white hover:opacity-80">
          Saiba mais
        </button>
      </div>
    </div>
  </section>
)
}
export default BenefitsSection
