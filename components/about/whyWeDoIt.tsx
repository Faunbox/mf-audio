import AnimatedSection from "@/lib/framer/animatedSection";
import Image from "next/image";

const WhyWeDoIt = () => {

    const whyWeDoIt =
  "We believe in the transformative power of ideas. By bringing exceptional speakers to diverse audiences, we aim to spark innovation, foster understanding, and drive positive change in businesses and communities worldwide.";

    return ( <AnimatedSection>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Why We Do It</h2>
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
              <Image
                src="/images/glosnik.jpg"
                alt="Why We Do It"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-xl leading-relaxed">{whyWeDoIt}</p>
            </div>
          </div>
        </div>
      </AnimatedSection> );
}
 
export default WhyWeDoIt;