import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Layout from "@/frontend/components/business/layout";

const PFD = Playfair_Display({ subsets: ["latin"], variable: "--font-pfd" });
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "Intima.g",
  description: "Ai powered erotic stories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${PFD.variable} ${lato.variable}`}>
          <Layout>{children}</Layout>
        </body>
      </UserProvider>
    </html>
  );
}
