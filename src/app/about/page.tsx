import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { quoteHref, siteConfig } from "@/lib/site-config";
import {
  ArrowRightIcon,
  AwardIcon,
  CheckCircleIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the local, family-owned team behind King of Salt Pools and learn why Tampa Bay homeowners trust us with their saltwater pool conversion.",
};

const credentials = [
  {
    icon: HeartIcon,
    title: "Family Owned & Operated",
    description:
      "We're a local family, not a call center. When you call, you're talking to someone who actually cares how your project turns out.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Licensed & Insured",
    description: `We're fully licensed and insured (${siteConfig.license}), so every job is backed by real accountability, not just a handshake.`,
  },
  {
    icon: AwardIcon,
    title: "Jandy Authorized Installer",
    description:
      "We're certified to install Jandy salt chlorine generation systems to manufacturer specifications, keeping your equipment warranty intact.",
  },
  {
    icon: CheckCircleIcon,
    title: "Straightforward, No Pressure",
    description:
      "No upsells, no scare tactics — just an honest recommendation sized to your pool and your budget.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section className="bg-white py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              About Us
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              A Local Family, Not a Franchise
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy/70">
              {siteConfig.name} is run by a husband-and-wife team with years
              of hands-on experience in the pool industry — long before we
              ever put our own name on a truck. We've installed equipment,
              balanced water chemistry, and helped homeowners solve everyday
              pool problems for years, and we started this company to bring
              that same experience directly to Tampa Bay families switching
              to salt.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              We're not a big box outfit passing you between departments.
              We're the people who show up, do the work, and stand behind it.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
            <Image
              src="/assets/images/about/husband_and_wife_business_parterns.jpeg"
              alt={`The husband-and-wife team behind ${siteConfig.name}`}
              width={960}
              height={1280}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* TRUST / CREDENTIALS */}
      <section className="bg-mist py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Why Homeowners Trust Us
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              Trust isn&rsquo;t a tagline for us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              Letting a stranger into your backyard to work on expensive
              equipment takes trust. Here&rsquo;s what backs it up.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-navy/10 bg-white p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy">
        <Container className="py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to work with a team you can trust?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-white/70">
            Let&rsquo;s talk about your pool and get you a straightforward
            quote.
          </p>
          <Link
            href={quoteHref}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-light transition-colors"
          >
            Get Your Quote Now
            <ArrowRightIcon className="size-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
