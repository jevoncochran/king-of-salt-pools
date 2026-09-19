"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  navLinks,
  quoteButtonLabel,
  quoteHref,
  siteConfig,
} from "@/lib/site-config";
import {
  MailIcon,
  MenuIcon,
  PhoneIcon,
  ShieldCheckIcon,
  XIcon,
} from "@/components/icons";
import Container from "@/components/Container";

const MENU_TRANSITION_MS = 300;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  // Matches the utility bar (h-10) + main nav (h-24) below; the ResizeObserver
  // corrects this if it's ever wrong, but seeding it avoids a flash where the
  // dropdown briefly covers the header before its first measurement lands.
  const [headerHeight, setHeaderHeight] = useState(136);
  const headerBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerBarsRef.current;
    if (!el) return;
    const updateHeight = () => setHeaderHeight(el.getBoundingClientRect().height);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuMounted) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuMounted]);

  useEffect(() => {
    if (open) {
      setMenuMounted(true);
      // Two rAFs force the browser to paint the off-screen position first,
      // otherwise it collapses straight to the final state with no animation.
      let innerId = 0;
      const outerId = requestAnimationFrame(() => {
        innerId = requestAnimationFrame(() => setMenuVisible(true));
      });
      return () => {
        cancelAnimationFrame(outerId);
        cancelAnimationFrame(innerId);
      };
    }

    setMenuVisible(false);
    const timeout = setTimeout(() => setMenuMounted(false), MENU_TRANSITION_MS);
    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div ref={headerBarsRef} className="relative z-50">
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
          <Container className="h-24 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="shrink-0"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/assets/images/shared/logo.png"
                alt={siteConfig.name}
                width={260}
                height={66}
                priority
                className="h-14 w-auto lg:h-20"
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
                {quoteButtonLabel}
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
        </div>
      </div>

      {menuMounted && (
        <div
          className={`fixed inset-x-0 bottom-0 z-40 flex flex-col bg-white transition-transform duration-300 ease-in-out lg:hidden ${
            menuVisible ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ top: headerHeight }}
        >
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 sm:px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-semibold uppercase tracking-wide text-navy/80 hover:bg-sand hover:text-gold-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={quoteHref}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-gold px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-light transition-colors"
            >
              {quoteButtonLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
