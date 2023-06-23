"use client";

import DialerForm from "@/components/DialerForm";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <title>ZapTo - Discador WhatsApp e Telegram</title>
      <div className="flex flex-1 flex-col justify-center z-20">
        <DialerForm />
      </div>
    </main>
  );
}
