import { Shirt, Palette, Package } from "lucide-react";

const FEATURES = [
  {
    icon: Shirt,
    title: "Premium Fabrics",
    description:
      "We use only the finest fabrics to ensure comfort, durability, and a professional look that represents your brand.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description:
      "From screen printing to DTF and embroidery, we bring your brand vision to life with precision and creativity.",
  },
  {
    icon: Package,
    title: "Flexible Orders",
    description:
      "Whether you need a small batch or large-scale production, we offer competitive pricing for every order size.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What Sets Us Apart
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built for Your Brand
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Quality shirts, expert customization, and flexible solutions — all
            from a single trusted source.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                <f.icon size={24} className="text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
