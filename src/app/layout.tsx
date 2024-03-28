import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { getPhoneOnly } from "@/lib/actions";

const inter = Inter({ subsets: ["latin"] });
const agatho = localFont({
  src: "./font/Agatho_ Light.otf",
  variable: "--font-agatho"
})
export const metadata: Metadata = {
  title: {
    template: "%s | JOHANNA BEAUTY",
    default: "JOHANNA BEAUTY | YOUR BEAUTY DESTINATION",
  },
  description: "With over 22 years in beauty, we bring expertise and passion. Our salon offers transformative beauty experiences in a welcoming atmosphere.",
  metadataBase: new URL('https://johannabeauty.vercel.app'),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    siteName: "Johanna Beauty",
    description: "With over 22 years in beauty, we bring expertise and passion. Our salon offers transformative beauty experiences in a welcoming atmosphere.",
    images: './opengraph-image.jpg',
    type: "website",
    title: "JOHANNA BEAUTY | YOUR BEAUTY DESTINATION",
    url: "https://johannabeauty.vercel.app",
  },
  // verification: { google: 'kX8ZIUq1cUGLuxBV3cf9lXOy5gKkT5ihjHXPZa-y2tE' }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const phoneNumber = await getPhoneOnly();
  return (
    <html lang="en">
      <body className={`${inter.className} ${agatho.variable}`}>
        <Providers>
          <Header />
          {children}

          <Footer phoneNumber={phoneNumber} />
        </Providers>
      </body>
    </html>
  );
}
