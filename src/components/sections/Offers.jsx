import { Shirt, Sparkles, Package, ShieldCheck, ChevronRight } from "lucide-react";

const OFFERS = [
  {
    icon: Shirt,
    title: "Variety of Shirts",
    items: [
      "T-shirts: round neck, V-neck & long sleeve",
      "Polo Shirts",
      "Corporate or casual wear",
      "Uniforms and workwear",
    ],
  },
  {
    icon: Sparkles,
    title: "Customization Options",
    items: [
      "Screen & DTF Printing",
      "Embroidery for logos and branding",
    ],
  },
  {
    icon: Package,
    title: "Flexible Supply Solutions",
    items: [
      "Small & large batch production",
      "Competitive bulk pricing",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    items: [
      "Premium fabrics for comfort and durability",
      "Strict quality control at every production stage",
    ],
  },
];

export default function Offers() {
  return (
    <section id="offers" className="bg-muted/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            What We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Comprehensive shirt solutions tailored to your business needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {OFFERS.map((o) => (
            <div
              key={o.title}
              className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/40"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <o.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold">{o.title}</h3>
                  <ul className="space-y-2">
                    {o.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight
                          size={14}
                          className="mt-0.5 shrink-0 text-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
