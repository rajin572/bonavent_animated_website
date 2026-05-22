import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisSmoothScroll from "@/component/ui/LenisSmoothScroll";
import Loading from "@/component/ui/Loading";
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

export const metadata: Metadata = {
  title: "Bonavent — Car Rental App | Rent Cars & Hire Drivers",
  description: "Bonavent connects car owners (hosts) with people who need a ride (guests). Browse cars, book instantly, hire professional drivers, or earn by listing your car.",
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