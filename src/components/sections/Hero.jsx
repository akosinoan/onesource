import { Shirt, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      {/* ── Gradient layers ── */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#1e3a8a] to-[#1d4ed8]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_-10%,rgba(59,130,246,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_110%,rgba(147,197,253,0.18),transparent)]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Banner */}
        <div className="mb-8 flex justify-center">
          <img
            src="./onesource_banner.png"
            alt="OneSource Banner"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-2xl
            bg-white/75 backdrop-blur-sm p-4 shadow-xl shadow-black/20 border border-white/10"
          />
        </div>

        {/* Headline */}
        <h1 className="mb-5 text-[clamp(1.5rem,7vw,4rem)] tracking-tighter text-center font-black drop-shadow-md drop-shadow-gray-900 bg-linear-to-b from-blue-800 via-blue-100 to-white text-transparent bg-clip-text whitespace-nowrap">
          "Your brand,{" "}
          <span className="bg-linear-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent">
            our giveaways."
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-blue-100/70 md:text-base">
          We are a corporate giveaways supplier in the Philippines providing
          customized promotional products designed to help businesses strengthen
          their brand presence and build lasting connections with clients and
          employees.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="accent"
            size="lg"
            onClick={() => scrollTo("#offers")}
          >
            Explore Our Services
            <ChevronRight size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("#contact")}
          >
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
