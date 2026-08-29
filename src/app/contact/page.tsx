import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us & Get a Quote",
  description:
    "Tell us about your pool and see your personalized saltwater conversion price instantly.",
};

export default function ContactPage() {
  return (
    <section className="bg-sand py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
            Get Your Quote
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
            It&rsquo;s Time to Enjoy Your Pool
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Tell us a little about yourself and your pool, and we&rsquo;ll
            show you your price right away — no waiting on a callback to find
            out what it costs.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
            <Image
              src="/assets/images/why-salt/truclear-hero-pool.jpg"
              alt="A backyard saltwater pool at dusk"
              width={960}
              height={1240}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
