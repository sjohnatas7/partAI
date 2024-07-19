import Animation from "./animation"
import { buttonVariants } from "./ui/button"

export default function CTA() {
  return (
    <section className="bg-backgound py-20" id="cotacao">
      <div className="container  rounded-3xl bg-primary p-16 text-center">
        <Animation animation="animate-slide-down">
          <h2 className="mb-8 text-3xl font-bold text-background">
            Obtenha uma cotação personalizada agora!
          </h2>
        </Animation>
        <Animation animation="animate-slide-down">
          <p className="mb-5 text-lg text-background opacity-80">
            Não perca mais tempo, obtenha uma cotação personalizada em apenas 2
            minutos. Nossa equipe de especialistas em seguros de automóvel
            trabalhará arduamente para encontrar a melhor opção para você.
          </p>
        </Animation>
        <button
          className={`${buttonVariants({
            variant: "outline",
          })} bold hover:bg-background hover:text-primary`}
        >
          <span className=" ">Obter cotação agora</span>
        </button>
      </div>
    </section>
  )
}
