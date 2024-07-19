import {
  faBolt,
  faCogs,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons"

import BenefitsSection from "@/components/benefits-section"
import ComoFunciona from "@/components/como-funciona"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Forms from "@/components/forms"
import Headline from "@/components/headline"
import { Icons } from "@/components/icons"
import { SiteHeader } from "@/components/site-header"
import Testimonials from "@/components/testimonal"
import ChatBot from "@/components/chatbot"

function IndexPage() {
  const benifitsSection = {
    title: "Como nosso ChatBot pode ajudar!",
    benefits: [
      {
        title: "Atendimento Personalizado",
        description:
          "O ChatBot é treinado para com base nos dados da SUA EMPRESA e necessidades. Assim, ele recomenda e VENDE ao usuario o seu MELHOR LADO.",
        fontAwesomeIcon: faCogs,
      },
      {
        title: "Respostas rápidas",
        description:
          "Nosso chatbot responde imediatamente, garantindo que o atendimento seja o mais EFICAZ possível. Ele usa as mais avançadas tecnicas de vendas para você VENDER MAIS",
        fontAwesomeIcon: faBolt,
      },

      {
        title: "Atendimento multicanal",
        description:
          "Nosso ChatBot pode responder a seus clientes 24/7 por telefone, email, chat e redes sociais (Instagram, Facebook, Messenger). Sem mais esqueçer de responder ou esperar por suporte!",
        fontAwesomeIcon: faHeadset,
      },
    ],
  }
  const whatWeWorkWith = {
    benefits: [
      {
        title: "Flowise",
        icon: <Icons.flowiseAi></Icons.flowiseAi>,
        description: "",
      },
      { title: "OpenAI", icon: <Icons.openAi />, description: "" },
      { title: "Make", icon: <Icons.make></Icons.make>, description: "" },
      {
        title: "Airtable",
        icon: <Icons.airTable></Icons.airTable>,
        description: "",
      },
      { title: "N8N", icon: <Icons.n8n></Icons.n8n>, description: "" },
      {
        title: "MidJourney",
        icon: <Icons.midjouney></Icons.midjouney>,
        description: "",
      },
      
    ],
    title: "Conheça nossas ferramentas"
  }
  return (
    <>
      <SiteHeader />
      <Headline></Headline>
      <BenefitsSection
        type="secondary"
        benefits={benifitsSection.benefits}
        title={benifitsSection.title}
        id="beneficios"
      ></BenefitsSection>
      <ComoFunciona id="vantagens"></ComoFunciona>
      <Testimonials></Testimonials>
      <CTA></CTA>
      {/* <FAQSection></FAQSection> */}
      <BenefitsSection
        type="secondary"
        benefits={whatWeWorkWith.benefits}
        title={whatWeWorkWith.title}
        id="ferramentas"
      ></BenefitsSection>
      <Forms inverseOrder={false} >
        <div className=" flex flex-col text-center">
          <h2 className="mb-2 text-4xl">
            Quer descobrir o que podemos fazer no seu negocio?
          </h2>
          <h3 className="mb-5 text-3xl">Agenda uma consulta GRATUITA agora</h3>
          <p className="text-xl">Ganhe vantagens competitivas do seu concorrente!</p>
        </div>
      </Forms>
      <Footer></Footer>
      <ChatBot></ChatBot>
    </>
  )
}

export default IndexPage
