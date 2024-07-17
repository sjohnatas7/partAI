import React from "react"
import Image from "next/image"

const ContactUs = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-6" style={{color: "#001D24"}}>
      <p className="mb-6 text-lg">
      Você sofre com alguma das condições descritas ou é responsável por alguém nessa situação?      </p>
      <p className="mb-6 text-lg">
      Entre em contato conosco para conhecer mais sobre a Neuromodulação e o tratamento realizado pela ReconecTO!      </p>
      <Image src='/imagens/logoDeitado.png' width={30} height={30} alt="logo" className="w-full"></Image>
    </div>
  )
}

export default ContactUs
