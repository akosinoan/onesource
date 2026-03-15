function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

const QUICK_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#offers" },
  { label: "Why Choose Us", href: "#why-us" },
];

export default function Footer() {
  return (
    <footer id="contact" className=" border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <button
              onClick={() => scrollTo("#hero")}
              className="mb-4 cursor-pointer border-none bg-transparent text-xl font-bold tracking-tight text-foreground"
            >
              One <span className="text-accent">Source</span>
            </button>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              453 Malaya Street Mandaluyong City
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:cheycastilo@gmail.com?subject=Inquiry from OneSource Web Page"
                  className="text-sm text-muted-foreground no-underline transition-colors hover:text-foreground"
                >
                  cheycastilo@gmail.com
                </a>
                <li>
                  <span className="text-sm text-muted-foreground no-underline transition-colors hover:text-foreground">
                    +63 919-095-6982
                  </span>
                </li>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="cursor-pointer border-none bg-transparent p-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="mailto:noanworks@gmail.com?subject=Inquiry from OneSource Web Page"
              className="text-muted-foreground no-underline transition-colors hover:text-foreground"
            >
              Noanworks Development
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
