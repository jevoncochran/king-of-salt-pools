import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import PageBrand from "@/components/PageBrand";
import FamilyVideo from "@/components/FamilyVideo";
import { quoteHref, siteConfig } from "@/lib/site-config";
import {
  ArrowRightIcon,
  AwardIcon,
  CheckCircleIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@/components/icons";

const familyVideoPlaybackId = "a4BTcRw00mOqsVg00PUsWkBBbBVUx1jJUb9XJOv5hG7ps";

const familyMembers = [
  {
    src: "/assets/images/about/nick.jpg",
    name: "Nick",
    role: "Owner & Lead Installer",
  },
  {
    src: "/assets/images/about/fernanda.jpg",
    name: "Fernanda",
    role: "Co-Founder",
  },
  {
    src: "/assets/images/about/daughter.jpg",
    name: "The Newest Team Member",
    role: "Chief Salt Supervisor (in training)",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A family owned business with 25 years of salt water swimming pool experience, serving the Tampa Bay Area as an authorized Jandy installer.",
};

const credentials = [
  {
    icon: HeartIcon,
    title: "25 Years of Experience",
    description:
      "A family owned business with 25 years of salt water swimming pool experience — when you call, you're talking to someone who's been doing this for decades.",
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
      "Every new salt system we install includes a 3-year warranty, backed by our status as an authorized Jandy installer.",
  },
  {
    icon: CheckCircleIcon,
    title: "Professional & Knowledgeable",
    description:
      "We're happy to answer all your questions — before and after the installation of your new system.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section className="bg-white py-20">
        <Container>
          <PageBrand variant="light" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              About Us
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              25 Years of Salt Water Pool Experience
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy/70">
              {siteConfig.name} is a pool service company that specializes in
              installing salt water chlorinator systems on residential pools
              throughout the {siteConfig.serviceArea}. Whether your current
              salt system needs to be replaced or you&rsquo;re converting a
              traditional chlorine pool to salt water for the first time,
              we&rsquo;re here for you.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              We&rsquo;re a family owned business with 25 years of salt water
              swimming pool experience. That experience is why we&rsquo;ve
              chosen to install the Jandy TruClear® Salt System — the best
              salt chlorinator on the market today, based on dependability,
              easy maintenance, and the warranty offered by the manufacturer.
              We&rsquo;re a licensed, insured, authorized Jandy installer, and
              every new system we install includes a 3-year warranty.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              Professional and knowledgeable, we&rsquo;re happy to answer all
              your questions — before and after the installation of your new
              system.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
            <Image
              src="/assets/images/about/nick-with-tool.jpg"
              alt={`${siteConfig.name} installing a Jandy TruClear salt system`}
              width={1200}
              height={1600}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          </div>
        </Container>
      </section>

      {/* MEET THE FAMILY */}
      <section className="bg-sand py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Meet the Family
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              The people behind {siteConfig.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              This is a real family business — Nick handles every
              installation personally, Fernanda helps keep things running,
              and their daughter already loves tagging along on the job.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {familyMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-navy">{member.name}</h3>
                  <p className="mt-0.5 text-sm text-navy/60">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* VIDEO */}
      {familyVideoPlaybackId && (
        <section className="bg-white py-20">
          <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
                Straight From the Family
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
                Hear why we love what we do
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-navy/70">
                Even the youngest member of the family knows what King of
                Salt Pools is all about.
              </p>
            </div>
            <div className="mx-auto w-full max-w-xs">
              <FamilyVideo playbackId={familyVideoPlaybackId} aspectRatio="9 / 16" />
            </div>
          </Container>
        </section>
      )}

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
            Call today to have your salt water system installed tomorrow!
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
