import Image from "next/image";
import Link from "next/link";
import { quoteButtonLabel, quoteHref, siteConfig } from "@/lib/site-config";
import Container from "@/components/Container";
import PageBrand from "@/components/PageBrand";
import ReviewCard from "@/components/ReviewCard";
import ServiceArea from "@/components/ServiceArea";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import {
  jandyReviewSummary,
  jandyTruclearReviews,
} from "@/lib/jandy-truclear-reviews";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  DropletIcon,
  LeafIcon,
  ShieldCheckIcon,
  SmileIcon,
  SparkleIcon,
  StarIcon,
} from "@/components/icons";

const heroTrustBullets = [
  "Family Owned & Operated",
  "Licensed & Insured",
  "Jandy Authorized Installer",
];

const benefits = [
  {
    icon: DropletIcon,
    title: "Softer-Feeling Water",
    description:
      "Salt systems create gentle, silky water that's easier on your skin than traditional chlorine pools.",
  },
  {
    icon: SparkleIcon,
    title: "Less Chemical Handling",
    description:
      "Your system generates chlorine automatically, so there's far less buying, storing, and pouring of harsh chemicals.",
  },
  {
    icon: LeafIcon,
    title: "Simpler Pool Care",
    description:
      "Consistent, automatic sanitation means fewer surprises and a more predictable maintenance routine.",
  },
  {
    icon: SmileIcon,
    title: "Red Eyes, No More",
    description:
      "Lower, steadier chlorine levels mean less irritation for eyes, skin, and swimwear.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy">
        <Image
          src="/assets/images/home/backyard-pool-hero.jpg"
          alt="A backyard salt water pool surrounded by palm trees"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/65 to-navy/15" />
        <Container className="relative py-20 sm:py-28">
          <PageBrand variant="light" />
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold-light">
            Salt System Installation &amp; Pool Conversion
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Turn Your Pool Into
            <br />
            <span className="text-gold">A Salt Water Pool</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
            Professional salt system installation and pool conversion in the{" "}
            {siteConfig.serviceArea}. Enjoy softer-feeling water, automatic
            chlorine generation, less chemical handling, and a simpler way to
            maintain your pool.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={quoteHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-light transition-colors"
            >
              {quoteButtonLabel}
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="/why-salt"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/10 transition-colors"
            >
              Why Salt?
            </Link>
          </div>

          <ul className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3">
            {heroTrustBullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-white/85"
              >
                <ShieldCheckIcon className="size-5 text-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* WHY SALT TEASER */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Why Salt?
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              A better way to enjoy your pool
            </h2>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-navy/10">
            {benefits.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={`text-center ${i > 0 ? "lg:px-6" : "lg:pr-6"}`}
              >
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-sand text-navy">
                  <Icon className="size-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/why-salt"
            className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold-dark hover:text-navy transition-colors"
          >
            See all the benefits of salt
            <ArrowRightIcon className="size-4" />
          </Link>
        </Container>
      </section>

      {/* VIDEO */}
      <section className="bg-sand py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              See It In Action
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              See a Salt System in Action
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              Take a quick look at how a salt system works and what it takes to
              get your pool converted.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <YoutubeEmbed
              videoId="iekZRgx63hM"
              title="Jandy TruClear Salt Chlorinator"
            />
          </div>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-mist py-16">
        <Container className="grid gap-10 sm:grid-cols-3">
          {[
            {
              title: "Family Owned & Operated",
              description:
                "We treat every pool like it's our own backyard — straightforward advice, no pressure.",
            },
            {
              title: "Licensed & Insured",
              description: `Fully licensed and insured (${siteConfig.license}), so your installation is in trusted hands.`,
            },
            {
              title: "Jandy Authorized Installer",
              description:
                "Certified to install Jandy salt chlorine generation systems to manufacturer specifications.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <CheckCircleIcon className="size-7 shrink-0 text-gold-dark" />
              <div>
                <h3 className="font-bold text-navy">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Container>
        <Container className="mt-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold-dark hover:text-navy transition-colors"
          >
            More about our background
            <ArrowRightIcon className="size-4" />
          </Link>
        </Container>
      </section>

      {/* SALT SYSTEM REVIEWS */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl text-center mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Real Reviews
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              Salt pool owners{" "}
              <span className="font-accent italic text-gold-dark">love</span>{" "}
              their results
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-navy/70">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-4" />
                ))}
              </div>
              <span className="font-bold text-navy">
                {jandyReviewSummary.averageRating}
              </span>
              <span>
                average across {jandyReviewSummary.totalReviews} reviews
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy/60">
              We stand behind the equipment we install. Here&rsquo;s what real
              owners of this system (Jandy TruClear®) have to say, straight from
              the manufacturer&rsquo;s own site.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jandyTruclearReviews.map((review) => (
              <ReviewCard key={review.name + review.date} {...review} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={jandyReviewSummary.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold-dark hover:text-navy transition-colors"
            >
              See all {jandyReviewSummary.totalReviews} reviews on Jandy.com
              <ArrowRightIcon className="size-4" />
            </a>
          </div>
        </Container>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-sand py-20">
        <Container>
          <ServiceArea />
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy">
        <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:h-[420px]">
            {/* TODO: The alt needs to be filled out here */}
            <Image
              src="/assets/images/about/product.jpg"
              alt=""
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to make the switch?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-white/70 lg:mx-0">
              You already own the pool. Now upgrade the way you enjoy it!
            </p>
            <Link
              href={quoteHref}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-light transition-colors"
            >
              {quoteButtonLabel}
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
