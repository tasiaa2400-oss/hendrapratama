import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HENDRA PRATAMA - Distribusi Gas LPG & Konstruksi",
  description: "Perusahaan terpercaya dalam distribusi Gas LPG, konstruksi & sipil, pengembangan proyek, dan konsultasi perencanaan di Kalimantan Timur.",
  keywords: ["HENDRA PRATAMA", "Gas LPG", "Konstruksi", "Distribusi Gas", "Sipil", "Kalimantan Timur", "Samarinda"],
  authors: [{ name: "HENDRA PRATAMA" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "HENDRA PRATAMA - Distribusi Gas LPG & Konstruksi",
    description: "Perusahaan terpercaya dalam distribusi Gas LPG, konstruksi & sipil, dan pengembangan proyek",
    url: "https://hendrapratama.com",
    siteName: "HENDRA PRATAMA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HENDRA PRATAMA - Distribusi Gas LPG & Konstruksi",
    description: "Perusahaan terpercaya dalam distribusi Gas LPG, konstruksi & sipil, dan pengembangan proyek",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="1ls24hwe6zmjtkgsvv3mgm24o55r8n" />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
