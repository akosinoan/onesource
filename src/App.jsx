import { useTheme } from "@/hooks/useTheme";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Offers from "@/components/sections/Offers";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/sections/Footer";

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar dark={dark} toggleTheme={toggle} />
      <Hero />
      <Features />
      <Offers />
      <WhyChooseUs />
      <CTABanner />
      <Footer />
    </div>
  );
}
