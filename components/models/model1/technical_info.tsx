import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TechnicalInformation() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Technical Information
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <ul className="space-y-4 mb-8">
            <li>
              <strong>Frequency Response:</strong> 45Hz - 20kHz (±3dB)
            </li>
            <li>
              <strong>Sensitivity:</strong> 88dB (2.83V @ 1m)
            </li>
            <li>
              <strong>Nominal Impedance:</strong> 8 Ohms
            </li>
            <li>
              <strong>Recommended Amplifier Power:</strong> 50-150W
            </li>
            <li>
              <strong>Crossover Frequency:</strong> 2.5kHz
            </li>
            <li>
              <strong>Dimensions (HxWxD):</strong> 380 x 220 x 290mm
            </li>
            <li>
              <strong>Weight:</strong> 8.5kg each
            </li>
          </ul>
          <Button>
            <Link href="/technical-specs.pdf" download>
              Download Full Specifications (PDF)
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
