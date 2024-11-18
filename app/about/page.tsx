import Header from "@/components/typography/header";
import WhyWeDoIt from "@/components/about/whyWeDoIt";
import Founders from "@/components/about/founders";
import AnimatedSection from "@/lib/framer/animatedSection";
import OurMission from "@/components/about/ourMission";
import ImageSeparator from "@/components/about/ImageSeparator";
import Reviews from "@/components/about/revievs";
import OurGoals from "@/components/about/goals";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Header title="About Us" />

      <main className=" mx-auto px-4 py-12 items-center justify-center">
        <div className="items-center justify-center container mx-auto">
          <WhyWeDoIt />
          <AnimatedSection>
            <Founders />
            <OurMission />
          </AnimatedSection>
        </div>

        <ImageSeparator />

        <Reviews />
        <OurGoals />
      </main>
    </div>
  );
}
