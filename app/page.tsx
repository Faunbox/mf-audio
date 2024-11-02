import CompanyCarousel from "@/components/hero_section/company-carousel";
import SpeakerLocations from "@/components/hero_section/dealers";
import { HeroSectionComponent } from "@/components/hero_section/hero-section";
import OffertHomePage from "@/components/hero_section/offertText";
import OurMissionSection from "@/components/hero_section/our_mission";
import WhyUsSection from "@/components/hero_section/why_us";

export default function Page() {
  return (
    <>
      <HeroSectionComponent />
      <WhyUsSection />
      <OurMissionSection />
      <OffertHomePage />
      <CompanyCarousel />
      <SpeakerLocations/>
    </>
  );
}
