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
import { fetchAllCategories } from "@/lib/actions";
import TestHero from "@/components/TestHero";

export default async function Home() {
  const categories = await fetchAllCategories();
  return (
    <main className="">
      <Hero />
      <TestHero />
      <HomeAbout />
      <HomeServices categories={categories} />
      <HomeOffers />
      {
        categories &&
        <HomeServicePrice categories={categories} />
      }
      <HomeContact />
    </main>
  );
}
