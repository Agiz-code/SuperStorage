import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SuperStorage",
  description:
    "SuperStorage is a powerful, cloud-based storage solution that lets you securely store, access, and share your files from anywhere. With generous storage capacity, intuitive organization tools, and real-time collaboration features, SuperStorage makes it easy to keep your important documents, photos, and videos safe and readily available across all your devices. Effortlessly upload, organize, and share files with friends, family, or colleagues, and enjoy seamless integration with your favorite productivity apps. Whether for personal use or team projects, SuperStorage keeps everything important at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
