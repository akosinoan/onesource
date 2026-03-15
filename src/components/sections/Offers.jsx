import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const pausedRef = useRef(false);
  const count = images.length;

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((prev) => (prev + 1) % count);
      }
    }, 2500);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-muted"
      style={{ aspectRatio: "16/9" }}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Left arrow */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + count) % count)}
        className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-accent/50 bg-card/80 p-1.5 text-accent backdrop-blur-sm transition hover:border-accent hover:bg-card"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % count)}
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-accent/50 bg-card/80 p-1.5 text-accent backdrop-blur-sm transition hover:border-accent hover:bg-card"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-accent" : "w-1.5 bg-accent/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Replace src values with real image paths once available
const APPAREL_IMAGES = [
  "./images/apparel-1.jpg",
  "./images/apparel-2.jpg",
  "./images/apparel-3.jpg",
  "./images/apparel-4.png",
];

const TUMBLER_IMAGES = [
  "./images/tumbler-1.png",
  "./images/tumbler-2.png",
  "./images/tumbler-3.png",
];

const WOODEN_IMAGES = [
  "./images/wooden-1.png",
  "./images/wooden-2.jpg",
  "./images/wooden-3.png",
  "./images/wooden-4.jpg",
  "./images/wooden-5.jpg",
  "./images/wooden-6.png",
];

const BAGS_IMAGES = [
  "./images/bags-1.jpg",
  "./images/bags-2.png",
  "./images/bags-3.png",
  "./images/bags-4.png",
  "./images/bags-5.png",
];

const UMBRELLA_IMAGES = [
  "./images/umbrella-1.png",
  "./images/umbrella-2.png",
  "./images/umbrella-3.png",
  "./images/umbrella-4.png",
  "./images/umbrella-5.png",
];

const CATEGORIES = [
  {
    title: "Apparels",
    images: APPAREL_IMAGES,
    description: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Promotional apparel is one of the most effective ways to promote your
          brand. These items transform everyday clothing into{" "}
          <strong className="text-foreground">
            walking advertisements for your company
          </strong>
          .
        </p>
        <div className="mt-4">
          <p className="mb-2 font-semibold">Products include:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {[
              "T-Shirts",
              "Polo Shirts",
              "Jackets",
              "Event Shirts",
              "Hoodies",
              "Other Marketing Apparels",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Customization options include{" "}
          <strong className="text-foreground">
            screen printing, DTF printing, and embroidery
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    title: "Tumblers",
    images: TUMBLER_IMAGES,
    description: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Custom tumblers are highly popular promotional products because they
          are{" "}
          <strong className="text-foreground">
            useful, reusable, and long-lasting
          </strong>
          .
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Available in different styles including{" "}
          <strong className="text-foreground">
            stainless steel tumblers, plastic tumblers, and travel mugs
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    title: "Wooden Promo Items",
    images: WOODEN_IMAGES,
    description: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Wooden promotional items provide a{" "}
          <strong className="text-foreground">
            premium and eco-friendly branding option
          </strong>{" "}
          that stands out from traditional giveaways.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          We provide{" "}
          <strong className="text-foreground">custom engraving services</strong>{" "}
          to personalize wooden items with your{" "}
          <strong className="text-foreground">
            company logo, brand name, or special message
          </strong>
          , creating a professional and long-lasting impression.
        </p>
        <div className="mt-4">
          <p className="mb-2 font-semibold">Our Wooden Promo Items:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {[
              "Wooden phone stands",
              "Wooden desk accessories & notepads",
              "Wooden coasters & cutleries",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Bags",
    images: BAGS_IMAGES,
    description: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Promotional bags are practical marketing tools that provide{" "}
          <strong className="text-foreground">continuous brand exposure</strong>{" "}
          whenever they are used. Every time the bag is used for shopping, work,
          or travel, your company logo is seen by more people.
        </p>
        <div className="mt-4">
          <p className="mb-2 font-semibold">Available bag types:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {["PVC Plastic Bags", "Ecobags", "Totebags", "Utility Bag"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Umbrellas & Raincoats",
    images: UMBRELLA_IMAGES,
    description: (
      <>
        <p className="text-muted-foreground leading-relaxed italic">
          "Rain or shine, your brand stands out."
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Branded{" "}
          <strong className="text-foreground">umbrellas and raincoats</strong>{" "}
          are practical giveaways that people use again and again. Every time it
          rains and the sun shines, your logo stays visible — turning a simple
          weather essential into a{" "}
          <strong className="text-foreground">powerful marketing tool</strong>.
        </p>
      </>
    ),
  },
];

export default function Offers() {
  return (
    <section id="offers" className="bg-muted/50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Our Product Categories
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Quality promotional products tailored to make your brand
            unforgettable.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/40"
            >
              <div
                className={`flex flex-col gap-10 md:flex-row md:items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Carousel */}
                <div className="w-full md:w-1/2">
                  <ImageCarousel images={cat.images} />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h3 className="mb-4 text-2xl font-bold text-accent">
                    {cat.title}
                  </h3>
                  {cat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
