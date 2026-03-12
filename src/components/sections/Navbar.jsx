import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "What We Offer", href: "#offers" },
  { label: "Why Choose Us", href: "#why-us" },
];

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar({ dark, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="cursor-pointer border-none bg-transparent text-xl font-bold tracking-tight text-foreground"
        >
          <span className="text-accent">One</span>Source
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="cursor-pointer rounded-md border-none bg-transparent px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-2 cursor-pointer rounded-md border border-border bg-transparent p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Button
            size="sm"
            className="ml-3"
            onClick={() => scrollTo("#contact")}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="cursor-pointer rounded-md border border-border bg-transparent p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="cursor-pointer border-none bg-transparent text-foreground"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="flex flex-col gap-1 border-t border-border bg-background px-6 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => {
                scrollTo(link.href);
                setOpen(false);
              }}
              className="cursor-pointer rounded-md border-none bg-transparent px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
          <Button
            size="sm"
            className="mt-1"
            onClick={() => {
              scrollTo("#contact");
              setOpen(false);
            }}
          >
            Get in Touch
          </Button>
        </div>
      )}
    </nav>
  );
}
