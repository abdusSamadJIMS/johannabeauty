// import { agatho } from "./layout";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeServices from "@/components/HomeServices";
import HomeServicePrice from "@/components/HomeServicePrice";
import HomeOffers from "@/components/HomeOffers";

import HomeContact from "@/components/HomeContact";
import { fetchAllCategories, fetchAllOffers, fetchContactInfo } from "@/lib/actions";

export default async function Home() {
  const categories = await fetchAllCategories();
  const contactInfo = await fetchContactInfo();
  const offers = await fetchAllOffers();

  return (
    <main className="scroll-smooth">
      <Hero whatsApp={contactInfo?.whatsApp || "0"} />
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
