# OneSource Marketing

Corporate giveaways supplier website for **One Source Marketing**, a Philippines-based company specializing in customized promotional products and branded merchandise.

**Live site:** https://onesourcemarketing.org

---

## Features

- Product showcase with image carousels across five categories (apparel, tumblers, wooden items, bags, umbrellas)
- Dark / light theme toggle with localStorage persistence
- Fully responsive layout (mobile-first with Tailwind CSS)
- SEO-optimized with Open Graph, Twitter Card, and JSON-LD structured data
- Automated deployment to GitHub Pages via GitHub Actions

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Deployment | GitHub Pages |

## Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Navbar.jsx        # Fixed nav with mobile menu & theme toggle
│   │   ├── Hero.jsx          # Banner, headline, CTA buttons
│   │   ├── Features.jsx      # "What Sets Us Apart" cards
│   │   ├── Offers.jsx        # Product categories with carousels
│   │   ├── WhyChooseUs.jsx   # Value proposition section
│   │   ├── CTABanner.jsx     # Final call-to-action
│   │   └── Footer.jsx        # Contact info & quick links
│   └── ui/
│       └── button.jsx        # Reusable button with CVA variants
├── hooks/
│   └── useTheme.js           # Dark/light mode hook
├── lib/
│   └── utils.js              # cn() class merging utility
└── App.jsx                   # Root component
public/
└── images/                   # Product images (23 files)
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server (http://localhost:5173)
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/`) which builds and deploys to GitHub Pages. The custom domain `onesourcemarketing.org` is configured via `public/CNAME`.

---

## Contact

**One Source Marketing**
- Email: cheycastilo@gmail.com
- Phone: +63-919-095-6982
- Address: 453 Malaya Street, Mandaluyong City, Philippines

Built by [Noanworks Development](mailto:noanworks@gmail.com)
