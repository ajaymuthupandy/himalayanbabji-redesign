"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaWhatsapp, FaXmark } from "react-icons/fa6";
import { nav, site, waLink } from "@/lib/site";
import { cn } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative z-50 border-b border-beige/70 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" onClick={close} className="flex shrink-0 items-center gap-3">
          <Image src="/images/logo-mark.png" alt="" width={445} height={240} className="h-11 w-auto" priority />
          <span className="font-heading text-[0.8rem] font-semibold uppercase leading-tight tracking-[0.18em] text-ink">
            Himalayan Babaji
            <span className="block text-[0.68rem] font-medium tracking-[0.32em] text-tan">Retreats · Bali</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-4 2xl:gap-6">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "whitespace-nowrap font-heading text-[0.75rem] font-medium uppercase tracking-wider transition-colors hover:text-tan",
                      active ? "text-tan" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-[28px] bg-brown px-5 py-2.5 font-heading text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-brown-dark sm:inline-flex"
          >
            <FaWhatsapp className="size-4" aria-hidden /> Enroll
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-ink hover:bg-cream xl:hidden"
          >
            {open ? <FaXmark className="size-5" /> : <FaBars className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-beige/70 bg-white transition-[max-height] duration-300 xl:hidden",
          open ? "max-h-[640px]" : "max-h-0 border-t-0",
        )}
      >
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 py-4 md:px-6">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "block py-2.5 font-heading text-sm uppercase tracking-wider",
                  pathname === item.href ? "text-tan" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="col-span-2 pt-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-[28px] bg-brown py-3 font-heading text-sm uppercase tracking-wider text-white"
            >
              <FaWhatsapp className="size-4" aria-hidden /> Enroll on WhatsApp
            </a>
          </li>
        </ul>
        <p className="sr-only">{site.name}</p>
      </div>
    </header>
  );
}
