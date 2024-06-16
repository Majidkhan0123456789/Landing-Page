import Camp from "@/Components/Camp";
import Hero from "@/Components/Hero";
import Highlightsection from '@/Components/Highlightsection';
import OutdoSection from "@/Components/Outdo Section";
import PersonaSection from '@/Components/PersonaSection';
import KudosSection from '@/Components/KudosSection'
import BenchmarkSection from '@/Components/BenchmarkSection'
 
export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Highlightsection />
      <PersonaSection/>
      <OutdoSection/>
      <KudosSection/>
      <BenchmarkSection/>
    </>
  )
}
