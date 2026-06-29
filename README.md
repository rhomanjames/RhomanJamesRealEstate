# Rhoman James Real Estate — Website

A premium, SEO-optimized real estate website built with Next.js 14, TypeScript, and Tailwind CSS. Designed for Elizabethtown, KY.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS custom properties
- **Fonts**: Cormorant Garamond (display) + Jost (body) via Google Fonts
- **SEO**: Metadata API, Schema.org JSON-LD, sitemap.xml, robots.txt
- **Deployment**: Vercel (recommended)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 3. Build for production

```bash
npm run build
npm start
``` 

---

## Deploying to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **New Project** → import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~60 seconds

---

## Customizing Your Site

### Update your contact details

Edit `components/Contact.tsx` and search for:
- `(502) 264-9376` — your phone number
- `RhomanMJames@gmail.com` — your email

### Add your headshot

1. Place your photo at `public/headshot.jpg`
2. Open `components/About.tsx`
3. Replace the placeholder `<div>` block with:

```tsx
import Image from "next/image";

// Inside the component, replace the placeholder div with:
<Image
  src="/headshot.jpg"
  alt="Rhoman James, Elizabethtown KY Real Estate Agent"
  fill
  style={{ objectFit: "cover" }}
  priority
/>
```

### Update your domain

Once you have a domain (e.g. `rhomanjames.com`):
1. Open `app/layout.tsx` → update `metadataBase`
2. Open `app/sitemap.ts` → update the URL
3. Open `app/robots.ts` → update the sitemap URL
4. Open `components/SchemaOrg.tsx` → update `url` and contact info

### Wire up the contact form

The form in `components/Contact.tsx` currently simulates a submission. To make it real:

**Option A — Formspree (easiest, free tier)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Replace the `handleSubmit` function:

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("sending");
  const data = new FormData(e.currentTarget);
  const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });
  if (res.ok) {
    setStatus("sent");
    (e.currentTarget as HTMLFormElement).reset();
  }
};
```

**Option B — Next.js API Route + Resend**
1. `npm install resend`
2. Create `app/api/contact/route.ts`
3. Send emails server-side using your API key

---

## SEO Checklist (to rank #1)

- [ ] Claim your **Google Business Profile** at [business.google.com](https://business.google.com) — this is the #1 local SEO move
- [ ] Add your real phone, email, and address everywhere on the site
- [ ] Upload a professional headshot
- [ ] Set your real domain in `metadataBase`
- [ ] Submit your sitemap to Google Search Console (`https://rhomanjames.com/sitemap.xml`)
- [ ] Add your site to Google Search Console to monitor rankings
- [ ] Post monthly blog content (create `app/blog/page.tsx`) with local keywords
- [ ] Get listed on Zillow, Realtor.com, and Homes.com (link back to your site)
- [ ] Ask every satisfied client for a Google review

---

## Adding a Blog (for SEO content)

Create `app/blog/[slug]/page.tsx` for individual posts. Suggested first posts:
- "Elizabethtown KY Housing Market — [Month Year]"
- "Best Neighborhoods in Elizabethtown for Families"
- "First-Time Home Buyer Guide: Elizabethtown, Kentucky"
- "What Is Hardin County Real Estate Worth in [Year]?"

---

## File Structure

```
rhoman-james-realty/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page (assembles all sections)
│   ├── globals.css       # Global styles + CSS variables
│   ├── sitemap.ts        # Auto-generated sitemap.xml
│   └── robots.ts         # Auto-generated robots.txt
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Full-height hero section
│   ├── Stats.tsx         # 4-column stats bar
│   ├── About.tsx         # About + values grid
│   ├── Services.tsx      # 6-card services grid
│   ├── Areas.tsx         # Coverage area strip
│   ├── SeoContent.tsx    # Keyword-rich SEO content block
│   ├── Contact.tsx       # Contact form + info
│   ├── Footer.tsx        # Footer with links
│   └── SchemaOrg.tsx     # JSON-LD structured data
├── public/               # Static files (add headshot.jpg here)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## License

Built for Rhoman James. All rights reserved.
