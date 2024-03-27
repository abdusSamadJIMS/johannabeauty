// import { agatho } from "./layout";
import Link from "next/link";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import facial from '../../public/static/services/facialTreatment.jpg'
import HomeServices from "@/components/HomeServices";
import { services } from "@/lib/services";
import HomeServicePrice from "@/components/HomeServicePrice";
import Footer from "@/components/Footer";
import HomeOffers from "@/components/HomeOffers";
import { BiEnvelope, BiUser } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import HomeContact from "@/components/HomeContact";
import { fetchAllCategories, fetchAllOffers, fetchContactInfo } from "@/lib/actions";
import TestHero from "@/components/TestHero";

export default async function Home() {
  const categories = await fetchAllCategories();
  const contactInfo = await fetchContactInfo();
  const offers = await fetchAllOffers();
  return (
    <main className="">
      <Hero whatsApp={contactInfo?.whatsApp || "0"} />
      <TestHero />
      <HomeAbout />
      <HomeServices categories={categories} />
      {
        offers &&
        <HomeOffers offers={offers} />
      }
      {
        categories &&
        <HomeServicePrice categories={categories} />
      }
      <HomeContact instagram={contactInfo?.instagram || ''}
        whatsApp={contactInfo?.whatsApp || ''}
        phoneNumber={contactInfo?.phoneNumber || ''}
        mailId={contactInfo?.mailId || ''}
      />
    </main>
  );
}
