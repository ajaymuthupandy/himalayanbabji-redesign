import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Yoga Teacher Training in Bali | Himalayan Babaji Retreats",
    template: "%s | Himalayan Babaji Retreats",
  },
  description:
    "Kundalini, Multi-Style and Meditation Yoga Teacher Training in Ubud, Bali, rooted in the Himalayan Siddha tradition.",
  openGraph: {
    siteName: site.name,
    images: ["/images/dsc07488.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="flex min-h-svh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
