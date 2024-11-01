'use client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"



// Company data
const companies = [
  { id: 1, name: "TechCorp", logo: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "InnovateSolutions", logo: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "FutureTech", logo: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "DataDynamics", logo: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "CloudNine", logo: "/placeholder.svg?height=100&width=200" },
  { id: 6, name: "SmartSystems", logo: "/placeholder.svg?height=100&width=200" },
]

export default function CompanyCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Partners</h2>
      <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {companies.map((company) => (
            <CarouselItem key={company.id} className="md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-md">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={200}
                    height={100}
                    className="w-full h-auto object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold text-center">{company.name}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  )
}