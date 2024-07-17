"use client"

import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function Footer() {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <footer className="bg-primary py-8 text-white">
      <div className="container mx-auto flex flex-col justify-between space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex flex-col items-center">
          <Image
            src="/imagens/logo.png"
            width={300}
            height={300}
            alt="Logo"
            className="rounded-lg"
            style={{
              filter: "brightness(0) invert(1)"
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-2 text-center text-xl font-semibold">
            Links Úteis
          </h3>
          <ul className="flex list-none flex-col items-center">
            {siteConfig.mainNav.map((item, index) => {
              return (
                item.href && (
                  <li key={index}>
                    <a
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "flex items-center text-white hover:cursor-pointer hover:underline"
                      )}
                    >
                      {item.title}
                    </a>
                  </li>
                )
              )
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-2 text-xl font-semibold">Contato</h3>
          <ul className="mt-4 text-center">
            <li>
              E-mail:{" "}
              <a href="mailto:reconectoneuromodulacao@gmail.com">
                reconectoneuromodulacao@gmail.com
              </a>
            </li>
            <li>Telefone: (16) 997504942</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-2 text-center text-xl font-semibold">
            Redes Sociais
          </h3>
          <nav className="mt-2 flex items-center space-x-1 ">
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.instagram className="size-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
