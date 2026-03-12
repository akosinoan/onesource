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
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#1e3a8a] to-[#1d4ed8]" />
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
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 backdrop-blur-sm">
          <Shirt size={15} className="text-blue-300" />
          <span className="text-sm font-medium text-blue-200">
            Premium Shirt Solutions
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl">
          Transform Your Shirt{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-300 via-blue-100 to-white bg-clip-text text-transparent">
            Ideas into Reality
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-blue-100/70 md:text-xl">
          At One Source Marketing, we specialize in providing high quality shirts
          for business brands, corporate uniforms, and events.
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
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
