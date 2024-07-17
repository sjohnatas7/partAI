import FAQSection from "@/components/accordion-faq"
import BenefitsSection from "@/components/benefits-section"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Headline from "@/components/headline"
import ProblemAndSolution from "@/components/problem-solution"
import { SiteHeader } from "@/components/site-header"
import Testimonials from "@/components/testimonal"
import WhatsappIcon from "@/components/whatsapp"

function IndexPage() {
  return (
    <>
      <SiteHeader />
      <Headline></Headline>
      <ProblemAndSolution></ProblemAndSolution>
      <BenefitsSection></BenefitsSection>
      <CTA></CTA>
      <Testimonials></Testimonials>
      <FAQSection></FAQSection>
      <Footer></Footer>
      <WhatsappIcon></WhatsappIcon>
    </>
  )
}

export default IndexPage
