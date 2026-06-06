import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisSmoothScroll from "@/component/ui/LenisSmoothScroll";
import { cn } from "@/lib/utils";

export const eurostile = localFont({
  src: [
    {
      path: "../../public/font/fonnts.com-Eurostile.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Regular_Oblique.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Regular_Oblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Medium_Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Bold_Oblique.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Heavy_Italic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/font/fonnts.com-Eurostile_Black_Italic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const BASE_URL = "https://www.bonaventpr.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Bonavent — Car Rental App | Rent Cars & Hire Drivers in Puerto Rico",
    template: "%s | Bonavent",
  },
  description:
    "Bonavent is Puerto Rico's #1 car rental app. Browse 500+ verified cars, book instantly, hire professional drivers, or earn passive income by listing your vehicle.",
  keywords: [
    "car rental Puerto Rico",
    "rent a car Puerto Rico",
    "hire a driver Puerto Rico",
    "car sharing app",
    "Bonavent",
    "bonaventpr",
    "book a car",
    "car rental app",
    "host and earn",
    "peer to peer car rental",
  ],
  authors: [{ name: "Bonavent", url: BASE_URL }],
  creator: "Bonavent",
  publisher: "Bonavent",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Bonavent",
    title: "Bonavent — Car Rental App | Rent Cars & Hire Drivers in Puerto Rico",
    description:
      "Bonavent is Puerto Rico's #1 car rental app. Browse 500+ verified cars, book instantly, hire professional drivers, or earn by listing your car.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bonavent Car Rental App" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bonavent — Car Rental App",
    description: "Browse cars, hire drivers, or earn as a host in Puerto Rico.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", eurostile.variable)}>
      <LenisSmoothScroll />
      <body className={`${eurostile.className} antialiased`}>
        {/* <Loading /> */}
        {children}
      </body>
    </html>
  );
}