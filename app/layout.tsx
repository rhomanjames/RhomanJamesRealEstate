import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rhoman James | Elizabethtown KY Real Estate",
    template: "%s | Rhoman James Real Estate",
  },
  description:
    "Rhoman James — Elizabethtown, KY real estate. Local guidance for buyers and sellers across Hardin County. Free consultation available.",
  keywords:
    "Elizabethtown KY real estate agent, homes for sale Elizabethtown Kentucky, Hardin County realtor, buy sell home Elizabethtown, VA loan Fort Knox, first time home buyer Kentucky",
  metadataBase: new URL("https://rhomanjames.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rhoman James | Elizabethtown KY Real Estate",
    description: "Local real estate resource for buyers and sellers across Hardin County, Kentucky.",
    url: "https://rhomanjames.com",
    siteName: "Rhoman James Real Estate",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: "Rhoman James Real Estate — Elizabethtown, KY" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhoman James | Elizabethtown KY Real Estate",
    description: "Local real estate resource for buyers and sellers across Hardin County, Kentucky.",
    images: ["/og-default.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: "Nzi6_7pXkeiCB5_dYoR6jBCnmb0HLBxfwQu8QgbvkhM",
  },
};

// Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
const GA_ID = "G-6VHR1RY8PF";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Fonts — preload display font for LCP improvement */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        {/* PWA / mobile */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D0D0D" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Rhoman James RE" />

        {/* GA4 — async, non-blocking */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
                send_page_view: true,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
