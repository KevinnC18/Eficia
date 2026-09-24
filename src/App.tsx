import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { SectionDivider } from './components/layout/SectionDivider'
import { Hero } from './components/sections/Hero'
import { Section1Beneficios } from './components/sections/Section1Beneficios'
import { Section2SobreNosotros } from './components/sections/Section2SobreNosotros'
import { Section3BeneficiosAmpliados } from './components/sections/Section3BeneficiosAmpliados'
import { Section4ComoFunciona } from './components/sections/Section4ComoFunciona'
import { Section5Contacto } from './components/sections/Section5Contacto'
import './styles/landing.css'

function App() {
  return (
    <div className="landing-page">
      <Header />
      <SectionDivider />

      <Hero />
      <SectionDivider />

      <Section1Beneficios />
      <SectionDivider />

      <Section2SobreNosotros />
      <SectionDivider />

      <Section3BeneficiosAmpliados />
      <SectionDivider />

      <Section4ComoFunciona />
      <SectionDivider />

      <Section5Contacto />
      <SectionDivider />

      <Footer />
    </div>
  )
}

export default App
