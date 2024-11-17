
import ContactForm from "@/components/contact/contact-form";
import CompanyInfo from "@/components/contact/company-info";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import FAQ from "@/components/faq/faq-component";
import { Metadata } from "next";
import Header from "@/components/typography/header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Learn more about our company, our mission, and our team.",
  openGraph: {
    title: "Contact | MF Audio",
    description: "Learn more about our company, our mission, and our team.",
    url: "https://www.myamazingwebsite.com/about",
    images: [
      {
        url: "https://www.myamazingwebsite.com/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Us - My Amazing Website",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col">
        <Header title="Contact" />
        <div className="flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Suspense fallback={<CompanyInfoSkeleton />}>
              <CompanyInfo />
            </Suspense>
            <Suspense fallback={<ContactFormSkeleton />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
      <FAQ />
    </>
  );
}

function ContactFormSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-10 w-1/3" />
    </div>
  );
}

function CompanyInfoSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}
