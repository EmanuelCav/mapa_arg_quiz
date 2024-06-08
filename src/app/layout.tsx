import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import UserGlobalContext from "@/server/context/user.context";
import GameGlobalContext from "@/server/context/game.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mapa de Argentina - Quiz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" sizes="any" />
      <body className={inter.className}>
        <UserGlobalContext>
          <GameGlobalContext>
            <div className="bg-[url('/icon.png')] bg-no-repeat bg-cover">
              <div className="container mx-auto h-screen border-x-white border-x-4 border-solid">
                {children}
              </div>
            </div>
          </GameGlobalContext>
        </UserGlobalContext>
      </body>
    </html>
  );
}
