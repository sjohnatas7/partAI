"use client"

import { useState } from "react"
import { useForm as uf } from "@formspree/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useInView } from "react-intersection-observer"
import { z } from "zod"

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
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  phone: z.string().regex(/^\d+$/, {
    message: "Invalid phone number.",
  }),
  website: z.string().url({
    message: "Invalid website URL.",
  }),
  difficulty: z.string().min(10, {
    message: "Difficulty description must be at least 10 characters.",
  }),
})
interface FormsProps {
  inverseOrder?: boolean
  children?: React.ReactNode
}
export default function Forms({ inverseOrder = false, children }: FormsProps) {
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
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      website: "",
      difficulty: "",
    },
  })

  const [state, handleSubmit] = uf("myForm")

  return (
    <div style={{ backgroundColor: "#E5E9F6" }}>
      <div className="container py-12" id="fale-conosco">
        <div className="flex flex-col py-10 md:flex-row">
          <div
            className={`${
              inverseOrder ? "md:order-2" : ""
            } flex items-center justify-center md:w-1/2`}
          >
            {children}
          </div>
          <div className="md:w-1/2">
            <Form {...form}>
              <form
                onSubmit={handleSubmit}
                className="mx-auto w-full space-y-8 rounded-3xl bg-background p-5 md:p-8"
              >
                <h2
                  ref={ref}
                  className="text-center text-4xl font-bold text-primary"
                >
                  FALE CONOSCO
                </h2>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Sobrenome" {...field} />
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
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Telefone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Site" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="difficulty"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Qual a sua maior dificuldade?"
                          {...field}
                        />
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
                <p className={state.succeeded ? "" : "invisible"}>
                  Obrigado por nós enviar uma mensagem, logo entraremos em
                  contato
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
