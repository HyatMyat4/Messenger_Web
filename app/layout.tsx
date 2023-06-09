import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Provider/Providers";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
export const metadata = {
  title: "Messenger",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
