"use client"

import React, { useState } from "react"
import {
  IconDefinition,
  faBalanceScale,
  faClock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useInView } from "react-intersection-observer"
import { LucideIcon } from "lucide-react"

interface BenefitProps {
  title: string
  description: string
  icon?: JSX.Element | null
  fontAwesomeIcon?: IconDefinition
}

const Benefit = ({ title, description, icon, fontAwesomeIcon }: BenefitProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg  p-4 text-center shadow-md transition-transform duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.09))",
          transformOrigin: "bottom left",
        transform: isHovered ? "rotate(-2deg)" : "rotate(0)",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="mb-5 flex size-60 items-center justify-center p-5">
        {fontAwesomeIcon && <FontAwesomeIcon icon={fontAwesomeIcon} size="8x" className="mb-4 text-primary" />}
        {icon && (icon)}
      </div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-base text-primary opacity-80">{description}</p>
    </div>
  )
}

interface BenefitsSectionProps {
  title?: string
  benefits: BenefitProps[]
  type: "primary" | "secondary"
  id?: string
}

const BenefitsSection = ({ title, benefits, type, id }: BenefitsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when 50% of the section is in view
    triggerOnce: true, // Only trigger once
  })

  if (inView && !isVisible) {
    setIsVisible(true)
  }

  return (
    <section className={`image-before image-before-tl ${type === "primary" ? "bg-primary" : "bg-background"} py-20 `} id={id}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="mb-10 text-center text-4xl font-bold text-primary">
            {title}
          </h2>
        )}

        <div
          className={`grid gap-6 md:grid-cols-3 ${
            isVisible ? "animate-slide-down" : "invisible"
          }`}
          ref={ref}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              fontAwesomeIcon={benefit.fontAwesomeIcon}
              // className="hover:animate"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className={`mt-2 rounded-full ${type === "primary" ? "bg-primary" : "bg-background"}  px-6 py-3 font-semibold text-background hover:opacity-80`}>
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
