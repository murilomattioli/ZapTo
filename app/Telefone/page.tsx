"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Telefone() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Lógica para manipular o deep link
    if (pathname === "/Telefone" && searchParams.get("telefone")) {
      // Faça algo com o número de telefone (query.telefone)
      console.log("DEEPLINK:", searchParams.get("telefone"));
    }
  }, [router, searchParams, pathname]);
  return null;
}
