import AnimatedSection from "@/lib/framer/animatedSection";
import { Award, Scale, ThumbsUp } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const OurGoals = () => {

    const goals = [
        {
          icon: Award,
          title: "Premium Quality",
          description: "We deliver top-tier speakers and content.",
        },
        {
          icon: ThumbsUp,
          title: "Maximum Satisfaction",
          description: "Our events consistently exceed expectations.",
        },
        {
          icon: Scale,
          title: "Best Price-Quality Ratio",
          description: "Unmatched value for your investment.",
        },
      ];

    return ( <AnimatedSection>
        <div className="flex flex-col container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <Card
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start"
              >
                <div className="md:w-1/4 flex items-center justify-center p-4">
                  <goal.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-grow md:w-3/4">
                  <CardHeader>
                    <CardTitle>{goal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{goal.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection> );
}
 
export default OurGoals;