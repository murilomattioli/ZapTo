import GithubCorner from "@/components/GithubCorner";
import "./globals.css";
import { LuToyBrick } from "react-icons/lu";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const RootLayout = (props: { children: React.ReactNode }) => {
  return (
    <html lang="pt-br" className={inter.className}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="ZapTo" href="/ZapTo-512x512.png"></link>
        <meta name="theme-color" content="#000" />
        <title>ZapTo - Discador WhatsApp e Telegram</title>
      </head>
      <body className="flex flex-1 scroll-auto overflow-x-hidden">
        <header>
          <GithubCorner />
        </header>

        <div className="flex flex-1 flex-col z-10 bg-black" {...props} />
        <Analytics />

        <footer className="footer justify-center items-center  text-neutral-content min-h-16 mb-0 mt-auto z-0 bg-black">
          <a
            href="https://linktr.ee/murilomattioli"
            target="_blank"
            className="btn btn-active btn-link btn-sm normal-case flex font-mono  opacity-70 hover:opacity-100 items-center"
          >
            <LuToyBrick id="toyBrick" />
            Desenvolvido por MLM
          </a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
