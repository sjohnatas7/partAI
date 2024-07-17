import React from "react"
import Resultados from "./resultados"
import Empoderamento from "./empoderamento"
import BeneficiosHeader from "./beneficios-header"

export default function Beneficios() {
  return (
    <section className="container mx-auto py-16 text-center" id="indicacoes">
        <BeneficiosHeader></BeneficiosHeader>
        <Resultados></Resultados>
        <Empoderamento></Empoderamento>
    </section>
  )
}
