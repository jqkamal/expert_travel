import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import CoreValues from "@/components/sections/CoreValues";
import About from "@/components/sections/About";
import Founder from "@/components/sections/Founder";
import Services from "@/components/sections/Services";
import HolidayPackages from "@/components/sections/HolidayPackages";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <CoreValues />
        <About />
        <Founder />
        <Services />
        <HolidayPackages />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
