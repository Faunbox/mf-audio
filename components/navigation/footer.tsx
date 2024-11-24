
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import NewsletterForm from "./newsletter";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/offert" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const statutes = [
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Shipping Policy", href: "/shipping" },
];

const customerZone = [
  { name: "FAQ", href: "/faq" },
  { name: "Offer", href: "/offer.pdf", download: true },
  { name: "Be Our Dealer", href: "/become-dealer" },
];

const socialMedia = [
  { name: "Facebook", icon: "facebook", href: "https://facebook.com/mfaudio" },
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://instagram.com/mfaudio",
  },
  { name: "TikTok", icon: "tiktok", href: "https://tiktok.com/@mfaudio" },
];

const models = ["Model A", "Model B", "Model C", "Model D", "Model E"];

const companyData = {
  phone: "+1 (555) 123-4567",
  email: "info@mfaudio.com",
  address: "123 Audio Street, Sound City, SC 12345, USA",
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-b border-gray-800 pb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <span>{companyData.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <a
                href={`mailto:${companyData.email}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {companyData.email}
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-gray-400 mt-1" />
              <span>{companyData.address}</span>
            </div>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col justify-between">
            <div>
              <Image
                src="/placeholder.svg"
                alt="MF Audio Logo"
                width={180}
                height={60}
                className="mb-6"
              />
              <p className="text-gray-400 mb-6">
                Elevating your audio experience with cutting-edge technology and
                unparalleled sound quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Find us on:</h3>
              <div className="flex space-x-4">
                {socialMedia.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.icon === "tiktok" ? (
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    ) : (
                      <item.icon />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <nav>
                <ul className="space-y-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {statutes.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Zone</h3>
              <ul className="space-y-2">
                {customerZone.map((item) => (
                  <li key={item.name}>
                    {item.download ? (
                      <Link
                        href={item.href}
                        download
                        className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
                      >
                        {item.name} <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Models</h3>
              <ul className="space-y-2">
                {models.map((model) => (
                  <li key={model}>
                    <Link
                      href={`/models/${model.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {model}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-center text-sm">
            All Rights Reserved 2024 © MF Audio
          </p>
        </div>
      </div>
    </footer>
  );
}
