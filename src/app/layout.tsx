import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Providers from "@/components/providers/providers";
import CompleteProfileOverlay from "@/components/common/complete-profile-overlay";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Confirmed",
  description: "Confirmed is a modern platform for event professionals. With tools like staking-based RSVPs, advanced analytics, and engagement insights, Confirmed turns every event into success.",
  openGraph: {
    title: "Confirmed — Host Smarter. Fill Rooms, Not Spreadsheets.",
    description: "A platform for event professionals — combining staking-based RSVPs, analytics, and engagement tools to help you plan confidently and fill every room.",
    // TODO: add the actual URL
    url: "",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Platform for Professionals. Fill Rooms, Not Spreadsheets.",
    description: "Confirmed helps event professionals host smarter with staking-based RSVPs, analytics, and engagement tools that make every event a success.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
          {/* <CompleteProfileOverlay /> */}
        </Providers>
      </body>
    </html >
  );
}
