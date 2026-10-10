import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salon Growth Studio | Websites for Salons",
  description: "Premium, mobile-friendly websites for hair salons and barbers in Dehradun and nearby cities. Turn searches into enquiries and appointments.",
  keywords: ["salon website design Dehradun", "hair salon website", "barber website", "website designer Uttarakhand"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
