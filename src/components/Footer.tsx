import Link from "next/link";
import Image from "next/image";
import { navLinks, quoteHref, siteConfig } from "@/lib/site-config";
import {
  ClockIcon,
  MailIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <Container className="py-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-white/10">
        <div className="lg:pr-8">
          <Image
            src="/assets/images/shared/logo.png"
            alt={siteConfig.name}
            width={200}
            height={51}
            style={{ height: "3rem", width: "auto" }}
            className="mb-4 brightness-0 invert opacity-95"
          />
          <p className="text-sm leading-relaxed text-white/60">
            Professional salt system installation and pool conversion, proudly
            serving the {siteConfig.serviceArea}.
          </p>
        </div>

        <div className="lg:px-8">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gold-light mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:px-8">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gold-light mb-4">
            Contact
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <PhoneIcon className="size-4 shrink-0" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MailIcon className="size-4 shrink-0" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:pl-8">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gold-light mb-4">
            Licensed & Insured
          </h3>
          <p className="flex items-center gap-2 text-sm">
            <ShieldCheckIcon className="size-4 shrink-0" />
            {siteConfig.license}
          </p>
          <p className="mt-3 text-sm text-white/60">
            Family owned &amp; operated. Jandy Authorized Installer.
          </p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
