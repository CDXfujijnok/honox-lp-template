import { createRoute } from 'honox/factory'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Accordion from '../islands/Accordion'

export default createRoute((c) => {
  return c.render(
    <div class="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Accordion />
        <CTA />
      </main>
      <Footer />
    </div>
  )
})
