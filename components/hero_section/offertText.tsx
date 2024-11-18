import Image from "next/image"

interface Offer {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
}

const offers: Offer[] = [
  {
    title: "2.1 and 5.1 Audio Systems",
    description: "Experience immersive sound with our high-quality 2.1 and 5.1 audio systems. Whether you're a movie enthusiast or a music lover, our systems deliver crystal-clear audio and deep, rich bass that will transform your listening experience.",
    features: [
      "Premium speakers for clear highs and mids",
      "Powerful subwoofers for deep, impactful bass",
      "Versatile setups for various room sizes",
      "Easy installation and user-friendly controls"
    ],
    imageSrc: "/images/stereo.jpg",
    imageAlt: "2.1 and 5.1 audio systems"
  },
  {
    title: "Custom Stands",
    description: "Elevate your audio equipment with our bespoke custom stands. Designed to complement your space and optimize your listening experience, our stands combine form and function for the perfect audio setup.",
    features: [
      "Tailored designs to match your decor",
      "Sturdy construction for stability and vibration reduction",
      "Various materials available, including wood and metal",
      "Customizable heights and finishes"
    ],
    imageSrc: "/images/stands.jpg",
    imageAlt: "Custom stands"
  }
]

export default function OffertHomePage() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Offers</h2>
        
        {offers.map((offer, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center ${index < offers.length - 1 ? 'mb-12' : ''}`}>
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-6 md:mb-0 `}>
              <Image
                src={offer.imageSrc}
                alt={offer.imageAlt}
                width={400}
                height={230}
                loading="lazy"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{offer.title}</h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {offer.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}