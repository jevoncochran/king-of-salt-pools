import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { quoteHref } from "@/lib/site-config";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckCircleIcon,
  DownloadIcon,
  DropletIcon,
  EyeIcon,
  GaugeIcon,
  LeafIcon,
  SettingsIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SmileIcon,
  SparkleIcon,
  WrenchIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Why Salt?",
  description:
    "Discover the benefits of switching to a saltwater pool and see what makes the Jandy TruClear salt chlorinator simple, reliable, and easy to maintain.",
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
    title: "Transparent Lid Design",
    description:
      "Visually check for calcium buildup in seconds through a UV-protected inspection window that stays clear for years — no need to open or uninstall the unit.",
  },
  {
    icon: SettingsIcon,
    title: "Auto-Reversing Polarity",
    description:
      "The cell automatically reverses polarity to cut down on calcium buildup, keeping it cleaner for longer between services.",
  },
  {
    icon: CheckCircleIcon,
    title: "Tool-Free Servicing",
    description:
      "Unscrew the cell from the body, hold onto the cord, and dip it in cleaning solution — no tools needed for inspection, servicing, or cleaning.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Extreme Reliability",
    description:
      "Built with Jandy's Never Lube® valve material for long-term durability, plus a patented gas trap that detects flow with no moving parts to wear out.",
  },
  {
    icon: BoltIcon,
    title: "Energy-Efficient",
    description:
      "Works at extremely low flow rates, so it's fully compatible with today's variable-speed pumps and won't fight your energy savings.",
  },
  {
    icon: GaugeIcon,
    title: "Digital Display",
    description:
      "A built-in display shows chlorine output at a glance, and the system is self-contained — it works with or without pool automation.",
  },
  {
    icon: WrenchIcon,
    title: "Easy to Install",
    description:
      "Available in two versions — one for new construction and one with 2\"–2½\" unions for retrofit installations — with a compact design that adapts to most equipment pads.",
  },
  {
    icon: SmartphoneIcon,
    title: "Smart Control Ready",
    description:
      "Pair it with a Jandy AquaLink® automation system and control your salt output right from your phone with the iAquaLink™ app.",
  },
];

const specs = [
  { value: "18g/hr", label: "Chlorine output" },
  { value: "35,000 gal", label: "Max pool size" },
  { value: "20 GPM", label: "Low-flow operation" },
  { value: "120V / 240V", label: "Hard-wired power" },
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
              The Equipment We Install
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              Meet the Jandy TruClear® Salt Chlorinator
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              We install the Jandy TruClear salt chlorinator — a system built
              for simple, reliable saltwater chlorination without sacrificing
              performance. It's compact, easy to maintain, and designed to
              integrate into most existing equipment pads.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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

            <div className="mt-6 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3">
              <p className="text-sm text-navy/80">
                <span className="font-bold text-navy">
                  Reduce chlorine use by up to 50%.
                </span>{" "}
                Pair your TruClear system with a Jandy TruGuard™ mineral
                sanitizer to cut down on chlorine even further — ask us if
                that upgrade makes sense for your pool.
              </p>
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
