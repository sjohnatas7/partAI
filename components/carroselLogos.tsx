import React from "react"
import Image from "next/image"

const TrustedBy = () => {
  return (
    <div style={{ backgroundColor: "#001D24" }}>
      <div className="container flex items-center justify-between py-6">
        {/* Lado Esquerdo */}
        <div className="mr-8">
          <p className="font-bold text-white">CONFIADO POR</p>
        </div>

        {/* Lado Direito */}
        <div className="flex w-full  flex-wrap items-center justify-around">
          {/* Imagem 1 */}
          <Image
            src="/imagens/bbc.png"
            width={58}
            height={58}
            alt="Logo 1"
            className="size-24 object-contain"
            style={{filter: "invert(100%)"}}
          />

          {/* Imagem 2 */}
          <Image
            src="/imagens/bbc.png"
            width={58}
            height={58}
            alt="Logo 2"
            className="size-24 object-contain"
            style={{filter: "invert(100%)"}}

          />

          {/* Imagem 3 */}
          <Image
            src="/imagens/bbc.png"
            width={58}
            height={58}
            alt="Logo 3"
            className="size-24 object-contain"
            style={{filter: "invert(100%)"}}

          />

          {/* Imagem 4 */}
          <Image
            src="/imagens/bbc.png"
            width={58}
            height={58}
            alt="Logo 4"
            className="size-24 object-contain"
            style={{filter: "invert(100%)"}}

          />
        </div>
      </div>
    </div>
  )
}

export default TrustedBy
