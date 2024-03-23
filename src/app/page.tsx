// import { agatho } from "./layout";
import Link from "next/link";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import facial from '../../public/static/services/facialTreatment.jpg'
import HomeServices from "@/components/HomeServices";
import { services } from "@/lib/services";
import HomeServicePrice from "@/components/HomeServicePrice";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeServicePrice />
      <div className=" px-10">
        <div className="flex items-center justify-between border-t-2 border-t-myColor text-myColor py-10">
          <div>
            <p>Johanna Beauty All rights reserved</p>
          </div>
          <div className="linkss flex gap-5">
            <Link href={'/about'}>About us</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/contact'}>Contact</Link>
          </div>
          <div className="">
            <p>+91 8010 51 2106</p>
          </div>
        </div>
      </div>
    </main>
  );
}
