"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Empresa", href: "#empresa" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Clientes", href: "#clientes" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#home" className="font-bold text-lg">
          SuaLogo
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-md font-medium transition-colors hover:text-primary hover:text-white hover:bg-black p-2 rounded-md duration-500"
            >
              {link.label}
            </Link>
          ))}

          <Button asChild>
            <Link href="#contato">Contato</Link>
          </Button>
        </nav>

        {/* Mobile */}
        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
