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

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeServicePrice />
      <HomeOffers />
      <HomeContact />
      <Footer />
    </main>
  );
}
