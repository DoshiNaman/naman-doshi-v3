import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import BaseLayout from "@/components/baseLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naman Doshi - Portfolio",
  description:
    "Explore the portfolio of Naman Doshi, a skilled web developer specializing in React, Next.js, Node.js, Django and fullstack engineering.",
  openGraph: {
    title: "Naman Doshi - Portfolio",
    description: "Discover projects, experience, and skills of Naman Doshi.",
    url: "https://naman-doshi.vercel.app/",
    siteName: "Naman Doshi Portfolio",
    images: [
      {
        url: "https://naman-doshi.vercel.app/portfoliov3.png",
        width: 1200,
        height: 630,
        alt: "Naman Doshi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naman Doshi - Portfolio",
    description: "Frontend Developer and Designer.",
    images: ["https://naman-doshi.vercel.app/portfoliov3.png"],
  },
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className={cn(inter.className, "dark")}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
