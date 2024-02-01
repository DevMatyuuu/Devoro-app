import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import  SessionProvider  from "@/components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devoro Login",
  description: "Log in on Devoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={`${inter.className}`}>
        <SessionProvider>
            {children}
        </SessionProvider>
      </body>
    </html>
  );
}
