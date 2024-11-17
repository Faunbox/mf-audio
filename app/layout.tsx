import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Home | MF Audio",
    template: "%s | MF Audio",
  },
  description:
    "Welcome to My Amazing Website, where you can find awesome content and services.",
  keywords: ["amazing", "website", "content", "services"],
  authors: [{ name: "Filip Sojecki" }],
  creator: "Filip Sojecki",
  publisher: "MF Audio",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.myamazingwebsite.com/",
    siteName: "My Amazing Website",
    images: [
      {
        url: "https://www.myamazingwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Amazing Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};



export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = await params

  return (
    <html lang={ lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
