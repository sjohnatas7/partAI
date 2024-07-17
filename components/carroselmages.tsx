import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export function CarouselDemo() {
  return (
    <div className="flex w-full justify-center px-16 text-primary">
    <Carousel className=" flex w-2/3 justify-center" opts={{
      loop: true,
    }} plugins={[Autoplay({
      delay: 2000,
    })]}>
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
         <Image key={index}
         src={`/imagens/patient3.webp`}
         alt={`Pessoa${index}`}
         className="w-full "
         width={500}
         height={500}
       />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
