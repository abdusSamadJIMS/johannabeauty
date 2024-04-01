import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { getPhoneOnly } from "@/lib/actions";
import { jsonLd } from "@/lib/json-ld";

const inter = Inter({ subsets: ["latin"] });
const agatho = localFont({
  src: "./font/Agatho_ Light.otf",
  variable: "--font-agatho"
})
export const metadata: Metadata = {
  title: {
    template: "%s | Johanna Beauty Salon",
    default: "Johanna Beauty Salon | YOUR BEAUTY DESTINATION",
  },
  description: "With over 22 years in beauty, we bring expertise and passion. Our Johanna Beauty Salon offers transformative beauty experiences in a welcoming atmosphere.",
  metadataBase: new URL('https://johannabeautysalon.in'),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    siteName: "Johanna Beauty Salon",
    description: "With over 22 years in beauty, we bring expertise and passion. Our salon offers transformative beauty experiences in a welcoming atmosphere.",
    images: './opengraph-image.jpg',

    type: "website",
    title: "Johanna Beauty Salon | YOUR BEAUTY DESTINATION",
    url: "https://johannabeautysalon.in",
  },
  keywords: ['beauty', 'fashion', 'beautiful', 'acne'],
  verification: { google: 'bKHS0Re-QcRIZkH3UYplJ5AxSR9LwMDJB-9SleG8JAU' },

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Header />
          {children}
          <Footer phoneNumber={phoneNumber} />
        </Providers>
      </body>
    </html>
  );
}
