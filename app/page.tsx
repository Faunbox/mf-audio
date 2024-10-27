import { HeroSectionComponent } from "@/components/hero_section/hero-section";
import AudioEquipmentOfferSection from "@/components/hero_section/offert";
import OurMissionSection from "@/components/hero_section/our_mission";
import WhyUsSection from "@/components/hero_section/why_us";

export default function Page() {
  return (
    <>
      <HeroSectionComponent />
      <WhyUsSection />
      <OurMissionSection />
      <AudioEquipmentOfferSection />
    </>
  );
}
