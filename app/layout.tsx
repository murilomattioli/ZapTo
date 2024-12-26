import GithubCorner from "@/components/GithubCorner";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { LuToyBrick } from "react-icons/lu";
import "./globals.css";

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
      <body>
        <header>
          <GithubCorner />
        </header>

        <div className="flex flex-1 flex-col z-10 bg-black" {...props} />
        <Analytics />

        <footer>
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
