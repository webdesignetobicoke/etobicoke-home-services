import TopBar from '@/components/TopBar'
import EmergencyBanner from '@/components/EmergencyBanner'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesSection from '@/components/ServicesSection'
import PromoBanner from '@/components/PromoBanner'
import WhyChooseUs from '@/components/WhyChooseUs'
import ReviewsSection from '@/components/ReviewsSection'
import StatsBar from '@/components/StatsBar'
import HomePulseSection from '@/components/HomePulseSection'
import BrandsSection from '@/components/BrandsSection'
import ServiceAreas from '@/components/ServiceAreas'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <PromoBanner />
        <WhyChooseUs />
        <StatsBar />
        <ReviewsSection />
        <HomePulseSection />
        <BrandsSection />
        <ServiceAreas />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
