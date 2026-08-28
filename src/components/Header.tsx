"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, quoteHref, siteConfig } from "@/lib/site-config";
import {
  MailIcon,
  MenuIcon,
  PhoneIcon,
  ShieldCheckIcon,
  XIcon,
} from "@/components/icons";
import Container from "@/components/Container";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-navy text-white/85 text-xs sm:text-sm">
        <Container className="h-10 flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5">
            <ShieldCheckIcon className="size-4 shrink-0" />
            {siteConfig.license}
          </span>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-gold-light transition-colors"
            >
              <MailIcon className="size-4 shrink-0" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-gold-light transition-colors"
            >
              <PhoneIcon className="size-4 shrink-0" />
              {siteConfig.phone}
            </a>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-navy/10">
        <Container className="h-20 flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/assets/images/shared/logo.png"
              alt={siteConfig.name}
              width={220}
              height={56}
              priority
              style={{ height: "3.25rem", width: "auto" }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-wide uppercase text-navy/80 hover:text-gold-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href={quoteHref}
              className="inline-flex items-center rounded-md bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-light transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-navy hover:bg-sand"
          >
            {open ? (
              <XIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </Container>

        {open && (
          <nav className="lg:hidden border-t border-navy/10 bg-white px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-navy/80 hover:bg-sand hover:text-gold-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={quoteHref}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-light transition-colors"
            >
              Get a Free Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
