import { Truck, Sparkles, BadgeDollarSign } from "lucide-react";

const REASONS = [
  {
    icon: Truck,
    title: "Reliable Supplier",
    description: "Consistent and timely delivery you can count on.",
  },
  {
    icon: Sparkles,
    title: "Customization Expertise",
    description: "Tailored to your brand vision and identity.",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost-Effective Solutions",
    description: "Competitive pricing without compromising on quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Promise
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Why Choose Us</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground whitespace-nowrap text-[clamp(0.9rem,3vw,1rem)]">
            We deliver quality, reliability, and value in every order.
          </p>
        </div>

        {/* Items */}
        <div className="grid gap-10 md:grid-cols-3">
          {REASONS.map((r) => (
            <div key={r.title} className="group text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-accent/20 to-accent/5 transition-all duration-300 group-hover:from-accent/30 group-hover:to-accent/10">
                <r.icon size={28} className="text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{r.title}</h3>
              <p className="mx-auto max-w-xs leading-relaxed text-muted-foreground whitespace-nowrap md:whitespace-normal text-[clamp(0.8rem,3vw,1rem)]">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
