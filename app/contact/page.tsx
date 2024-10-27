import Image from 'next/image'
import ContactForm from '@/components/contact/contact-form'
import CompanyInfo from '@/components/contact/company-info'
import { Skeleton } from "@/components/ui/skeleton"
import { Suspense } from 'react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative w-full min-h-[25vh]">
        <Image
          src="/images/logo_zdjecie.jpg"
          alt="Contact page hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white px-4 md:px-8 pt-20">Contact Us</h1>
        </div>
      </div>
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
  )
}

function ContactFormSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-10 w-1/3" />
    </div>
  )
}

function CompanyInfoSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}