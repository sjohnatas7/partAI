"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useInView } from "react-intersection-observer"
import { z } from "zod"
import { useForm as uf } from '@formspree/react';


import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import ContactUs from "./contact"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  number: z.string().regex(/^\d+$/, {
    message: "Invalid number.",
  }),
})

export default function ProfileForm() {
  const [isAnimated, setIsAnimated] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  if (inView && !isAnimated) {
    setIsAnimated(true)
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      number: "",
      city: "",
    },
  })

  const [state, handleSubmit] = uf("xbjnqprq");

  return (
    <div style={{ backgroundColor: "#E5E9F6" }}>
      <div className="container py-12" id="contato">
        <h2 className=" text-center text-4xl font-bold">
          Conheça mais do tratamento
        </h2>
        <div className="flex flex-col py-10 md:flex-row">
          <div className="flex items-center justify-center md:w-1/2">
            <ContactUs></ContactUs>
          </div>
          <div className="md:w-1/2">
            <div ref={ref} className="flex w-full flex-col    "></div>
            <Form {...form}>
              <form
                onSubmit={handleSubmit}
                className="mx-auto w-full space-y-8 p-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu email..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite sua cidade..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número</FormLabel>
                      <FormControl>
                        <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center md:justify-center">
                  <Button
                    type="submit"
                    className={buttonVariants({ size: "lg" })}
                    style={{ width: "100%" }}
                    disabled={state.submitting}
                  >
                    Enviar
                  </Button>
                </div>
                <p className={state.succeeded ?"" : "invisible"}>Obrigado por nós enviar uma mensagem, logo entraremos em contato</p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
