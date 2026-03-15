import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function CTABanner() {
  return (
    <section className="px-6 py-10">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1e3a8a] to-[#3b82f6]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(147,197,253,0.3),transparent_60%)]" />

        <div className="relative z-10 px-8 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-blue-100/80">
            Get in touch today. We would be happy to assist you with your
            promotional product needs.
          </p>
          <a href="mailto:cheycastilo@gmail.com?subject=Inquiry from OneSource Web Page">
            <Button variant="accent" size="lg">
              Contact Us
              <ChevronRight size={18} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
