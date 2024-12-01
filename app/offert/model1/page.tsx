import DesignHistory from "@/components/models/model1/design";
import ProductHero from "@/components/models/model1/product_hero";
import ShockingSection from "@/components/models/model1/shocking_section";
import TechnicalInformation from "@/components/models/model1/technical_info";
import TopComponents from "@/components/models/model1/top_component";
import VideoSection from "@/components/models/model1/video_section";
import Header from "@/components/typography/header";

export default function ProductPage() {
    
  return (
    <main>
      <Header title="Model 1 - Bookshelf Speaker" />
      <ProductHero />
      <ShockingSection />
      <VideoSection />
      <DesignHistory />
      <TopComponents />
      <TechnicalInformation />
    </main>
  );
}
