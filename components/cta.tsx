import { buttonVariants } from "./ui/button";

export default function CTA() {
    return (
        <section className="bg-primary py-20" id="cotacao">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-white">Obtenha uma cotação personalizada agora!</h2>
            <p className="mb-5 text-lg text-white opacity-80">Não perca mais tempo, obtenha uma cotação personalizada em apenas 2 minutos. Nossa equipe de especialistas em seguros de automóvel trabalhará arduamente para encontrar a melhor opção para você.</p>
            <button className={buttonVariants({variant: "outline"})}>
                
                <span className="text-white">Obter cotação agora</span>
                </button>
          </div>
        </section>
        
    )
}