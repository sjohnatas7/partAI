import { useState } from "react";
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-40 m-0 w-full bg-white"
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} logo="/imagens/logo.png"/>
        
      </div>
    </header>
  )
}
