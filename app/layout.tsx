import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { Toaster } from "sonner";
=======
>>>>>>> 3de0711d9a43fe82351c913e7e39b9eb14c85759

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
<<<<<<< HEAD
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
=======
      <body className={`${monaSans.className} antialiased`}>{children}</body>
>>>>>>> 3de0711d9a43fe82351c913e7e39b9eb14c85759
    </html>
  );
}
