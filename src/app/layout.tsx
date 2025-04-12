import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empowerment Group - Agency for Employment",
  description: "We connect the right workers with the right employers.",
  keywords:
    "job, jobs, work, employment, employer, employee, career, hiring, recruitment, recruitment agency, job hunting, job search, job board, job site, job listing, job application, job vacancy, job opening, job opportunity, job offer",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/logo/logo.svg",
        type: "image/svg+xml",
        sizes: "48x48",
      },
      {
        url: "/logo/logo.svg",
        type: "image/svg+xml",
        sizes: "96x96",
      },
    ],
    shortcut: [
      {
        url: "/logo/logo.svg",
        type: "image/svg+xml",
        sizes: "196x196",
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Empowerment Group - Agency for Employment",
    description: "We connect the right workers with the right employers.",
    siteName: "Empowerment Group",
    images: [
      {
        url: "/logo/logo.svg",
        width: 1920,
        height: 1080,
        type: "image/svg+xml",
        alt: "Empowerment Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empowerment Group - Agency for Employment",
    description: "We connect the right workers with the right employers.",
    images: [
      {
        url: "/logo/logo.svg",
        width: 1920,
        height: 1080,
        alt: "Logo",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
