import AnimatedSection from "@/lib/framer/animatedSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

const Reviews = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      company: "Tech Innovators Inc.",
      review: "Their speakers are truly inspiring and knowledgeable.",
      rating: 5,
      logo: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Bob Williams",
      company: "Future Enterprises",
      review: "Every event with their speakers is a game-changer for our team.",
      rating: 4,
      logo: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Carol Brown",
      company: "Visionary Solutions",
      review: "Insightful presentations that drive real business growth.",
      rating: 5,
      logo: "/placeholder.svg?height=50&width=50",
    },
  ];

  return (
    <AnimatedSection>
      <div className="flex flex-col container mx-auto">
        <h2 className="text-3xl font-bold mb-4 ">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={review.name + index} className="relative shadow-xl">
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <Image
                  src={review.logo}
                  alt={`${review.company} logo`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>{review.name}</CardTitle>
                  <CardDescription>{review.company}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-primary opacity-20 absolute top-12 left-4" />
                <p className="mb-2 pl-8 italic">
                  `&#34;`{review.review}`&#34;`
                </p>
                <StarRating rating={review.rating} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Reviews;
