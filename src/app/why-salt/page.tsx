import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { quoteHref } from "@/lib/site-config";
import {
  ArrowRightIcon,
  BoltIcon,
  DownloadIcon,
  DropletIcon,
  EyeIcon,
  LeafIcon,
  ShieldCheckIcon,
  SmileIcon,
  SparkleIcon,
  WrenchIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Why Salt?",
  description:
    "Discover the benefits of switching to a saltwater pool with King of Salt Pools — softer water, fewer chemicals, and simple, reliable equipment we stand behind.",
};

const coreBenefits = [
  {
    icon: DropletIcon,
    title: "Softer-Feeling Water",
    description:
      "Salt systems produce gentle, silky water without the harsh, drying effect of traditionally-dosed chlorine — your skin and hair will notice the difference.",
  },
  {
    icon: SparkleIcon,
    title: "Less Chemical Handling",
    description:
      "The system generates its own chlorine from dissolved salt, so there's far less buying, measuring, and pouring of harsh chemicals into your pool.",
  },
  {
    icon: LeafIcon,
    title: "Simpler Pool Care",
    description:
      "Consistent, automatic sanitation means fewer surprises, less guesswork, and a more predictable routine for keeping your water balanced.",
  },
  {
    icon: SmileIcon,
    title: "Red Eyes, No More",
    description:
      "Lower, steadier chlorine levels are far gentler on eyes, skin, and swimwear than the spikes that come with manually dosed pools.",
  },
];

const productFeatures = [
  {
    icon: EyeIcon,
    title: "Easy to Check",
    description:
      "A simple viewing window lets you check for buildup in seconds — no tools, no guesswork, no need to take anything apart.",
  },
  {
    icon: WrenchIcon,
    title: "Low Maintenance",
    description:
      "Cleaning and servicing takes minutes, and the system helps prevent buildup on its own between visits.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built to Last",
    description:
      "Durable construction backed by a 3-year manufacturer warranty, so you're covered for years to come.",
  },
  {
    icon: BoltIcon,
    title: "Works With Your Pump",
    description:
      "Runs efficiently even at low flow, so it plays nicely with modern energy-saving pool pumps.",
  },
];

const specs = [
  { value: "35,000 gal", label: "Max pool size" },
  { value: "3 Years", label: "Standard warranty" },
];

export default function WhySaltPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy">
        <Image
          src="/assets/images/why-salt/truclear-hero-pool.jpg"
          alt="Saltwater pool with a Jandy TruClear salt chlorinator installed poolside"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
        <Container className="relative py-20 sm:py-28">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold-light">
            Why Salt?
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            The Benefits of a Saltwater Pool
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            Softer water, fewer chemicals, and a pool that&rsquo;s simply
            easier to own. Here&rsquo;s what changes when you make the
            switch — and the equipment that makes it possible.
          </p>
          <Link
            href={quoteHref}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-light transition-colors"
          >
            Get Your Quote Now
            <ArrowRightIcon className="size-4" />
          </Link>
        </Container>
      </section>

      {/* CORE BENEFITS */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              The Difference
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              A better way to enjoy your pool
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreBenefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-navy/10 bg-sand p-6"
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

      {/* PRODUCT INTRO */}
      <section className="bg-sand py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 flex items-center justify-center">
            <Image
              src="/assets/images/why-salt/truclear-system.png"
              alt="Jandy TruClear salt chlorinator control panel and cell"
              width={1042}
              height={1445}
              className="h-auto w-full max-w-xs"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Our Equipment
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              Professional-Grade Equipment, Installed by Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              We only install trusted, professional-grade salt systems
              (Jandy TruClear®) — built to be reliable and easy to live
              with, backed by a manufacturer warranty and our own
              workmanship.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-navy/10 bg-white px-3 py-4 text-center"
                >
                  <p className="text-lg font-extrabold text-navy">
                    {spec.value}
                  </p>
                  <p className="mt-1 text-xs text-navy/60">{spec.label}</p>
                </div>
              ))}
            </div>

            <a
              href="/brochures/jandy-truclear-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold-dark hover:text-navy transition-colors"
            >
              <DownloadIcon className="size-4" />
              Download the Full Brochure (PDF)
            </a>
          </div>
        </Container>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Built to Last
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              Simple, reliable, and easy to maintain
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productFeatures.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-navy/10 bg-mist p-6"
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-sand">
              <Image
                src="/assets/images/why-salt/truclear-lid.png"
                alt="Close-up of the TruClear transparent inspection lid"
                width={596}
                height={834}
                className="mx-auto h-64 w-auto object-contain py-6"
              />
              <figcaption className="border-t border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy">
                Inspect for calcium buildup at a glance
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-sand">
              <Image
                src="/assets/images/why-salt/truclear-cell.png"
                alt="Close-up of the TruClear salt cell and valve body"
                width={806}
                height={1103}
                className="mx-auto h-64 w-auto object-contain py-6"
              />
              <figcaption className="border-t border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy">
                A durable cell built for years of service
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-navy/10 bg-sand">
              <Image
                src="/assets/images/why-salt/truclear-cell-front.png"
                alt="Front view of the TruClear salt cell showing the flow-direction ports"
                width={1348}
                height={1500}
                className="mx-auto h-64 w-auto object-contain py-6"
              />
              <figcaption className="border-t border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy">
                Balanced flow ports for consistent output
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy">
        <Container className="py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to make the switch?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-white/70">
            You already own the pool. Now upgrade the way you enjoy it!
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
