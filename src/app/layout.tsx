import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'Officina Meccatronica | Advanced Automotive Services',
  description: 'Officina Meccatronica Control Garage offers precision automotive diagnostics, repair, and maintenance for modern vehicles. Your trusted partner for excellence.',
  keywords: ["automotive, garage, mechatronics, car repair, diagnostics, vehicle service, engine control unit, transmission repair, ABS, ESP, Italy"],
  openGraph: {
    "title": "Officina Meccatronica | Advanced Automotive Services",
    "description": "Officina Meccatronica Control Garage offers precision automotive diagnostics, repair, and maintenance for modern vehicles. Your trusted partner for excellence.",
    "url": "https://www.officinameccatronica.com",
    "siteName": "Officina Meccatronica",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/mechanic-examining-car_107420-95949.jpg",
        "alt": "Modern automotive garage interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Officina Meccatronica | Advanced Automotive Services",
    "description": "Officina Meccatronica Control Garage offers precision automotive diagnostics, repair, and maintenance for modern vehicles.",
    "images": [
      "http://img.b2bpic.net/free-photo/mechanic-examining-car_107420-95949.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
