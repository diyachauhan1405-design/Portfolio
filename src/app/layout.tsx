import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/smooth-scroll-provider";
import CursorSpotlight from "@/components/cursor-spotlight";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Diya Chauhan — UI/UX Designer & Frontend Developer",
  description:
    "Diya Chauhan is a UI/UX Designer & Frontend Developer crafting intuitive digital products, scalable web experiences, and meaningful user interactions.",
  keywords: [
    "Diya Chauhan",
    "UI/UX Designer",
    "Frontend Developer",
    "Product Designer",
    "React Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Diya Chauhan — UI/UX Designer & Frontend Developer",
    description:
      "Crafting intuitive digital products, scalable web experiences, and meaningful user interactions.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-primary font-body selection:bg-accent-primary/30 selection:text-white">
        <SmoothScrollProvider>
          <CursorSpotlight />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
