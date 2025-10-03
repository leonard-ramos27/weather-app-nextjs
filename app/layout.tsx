import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { UnitsStoreProvider } from "@/providers/units-store-provider";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather App built using NextJS, React, Typescript and Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${dmSans.variable} antialiased px-4 pt-4 pb-12 md:px-6 md:pt-6 md md:pb-20 xl:px-28 xl:pt-12 min-h-screen`}
      >
        <UnitsStoreProvider>
          <Header />
          {children}
        </UnitsStoreProvider> 
      </body>
    </html>
  );
}
