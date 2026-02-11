"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type Props = {
  links: { label: string; href: string }[];
};

export function MobileNav({ links }: Props) {
  const [open, setOpen] = useState(false);
  

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[85vw] max-w-sm overflow-x-hidden"
      >
        <nav className="flex flex-col gap-4 mt-12 p-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:bg-black hover:text-white p-2 rounded-md transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
