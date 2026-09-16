import type { Metadata } from "next";
import Container from "@/components/Container";
import PageBrand from "@/components/PageBrand";
import { siteConfig } from "@/lib/site-config";
import { CheckCircleIcon, DownloadIcon, XIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Warranty",
  description:
    "Read the full Jandy Limited Warranty covering your new salt water chlorinator system, and download the official warranty document.",
};

const jandyWarrantyPdfUrl =
  "https://cdn.fluidrausa.com/-/media/zodiac/global/downloads/corporate/limited-warranty/jandy-limited-warranty-h0333803-rev-ab.pdf?rev=3e380ae9c5d34e7cb8fb322894bdfd8a";

const coveragePeriods = [
  { item: "Most Jandy® branded products (standard coverage)", duration: "1 year" },
  {
    item: "Complete electronic salt water chlorine systems (controller & cell purchased and installed together) and complete AOP systems",
    duration: "3 years",
  },
  { item: "Variable speed pumps", duration: "3 years" },
  { item: "Nicheless underwater lights", duration: "3 years" },
  { item: "Heat pumps", duration: "2 years" },
  { item: "Heat pump compressors & heat exchangers", duration: "5 years" },
  { item: "JXi™ heaters", duration: "1 year" },
  {
    item: "JXi gas heater exchangers with factory-installed VersaFlo™ Integrated Bypass",
    duration: "5 years",
  },
  { item: "Never Lube® valves made from CPVC", duration: "Life of the pool originally installed on" },
  { item: "Never Lube® valves made from PVC", duration: "1 year" },
  {
    item: "Purchased replacement parts (except salt cells/electrodes below)",
    duration: "90 days",
  },
  { item: "Replacement salt chlorine generator cells & electrodes", duration: "1 year" },
  { item: "Maintenance tools", duration: "90 days" },
  { item: "Commercial applications (unless a shorter period is listed above)", duration: "1 year" },
];

const notCoveredCauses = [
  "Failure to properly install, operate, or maintain the product per Fluidra's published manuals.",
  "Improper equipment sizing or product mis-applications.",
  "The workmanship of any installer of the product.",
  "Use of non-factory authorized parts or accessories with the product.",
  "Product modifications or adjustments not in accordance with Fluidra's published manuals.",
  "Improper pool/spa chemical balance (pH between 7.2–7.8, ideally 7.4–7.6; Cyanuric Acid 30–100 ppm; Total Alkalinity 80–120 ppm, or 100–150 ppm for vinyl pools; Total Dissolved Solids under 1,500 ppm excluding salt; Total/Calcium Hardness under 800 ppm, ideally 200–400 ppm).",
  "Corrosion, erosion, scaling, calcification, or other conditions caused by water hardness, chemical imbalance, or lack of maintenance.",
  "Chemical contamination of combustion air, improper chemical use (e.g. upstream of the heater or through the skimmer), or copper-based algaecides used with Nature2 products.",
  "Abuse, damage during transit or installation, mishandling, tampering, vandalism, alterations, accidents, fire, flood, storms, earthquakes, power surges, lightning, animals, insects, negligence, or acts of God.",
  "Improper grounding/bonding, mis-wiring, loose or cut wiring, incorrect breaker sizing, improper electrical supply, incorrect plumbing or fitting sizes, cross-threading, over/under-tightening, improperly secured covers, improper valve placement, or programming errors.",
  "Freezing, corrosion, cracking, overheating, warping, flooding, or moisture intrusion related to weather, climate, improper winterization, equipment placement, ventilation, water circulation, run-off, sprinklers, or nearby lights/products.",
  "Operating the product at water flow rates below minimum or above maximum specifications, or with insufficient water.",
  "Dirty, clogged, blocked, covered, or obstructed plumbing, chlorine generator cells or sensors, pump baskets/impellers, heater orifices, grills, vents, filter elements, or breather tubes.",
  "Collateral damage caused by failure of any component, including O-rings, pump strainer baskets, DE grids, sand filter laterals, or cartridge elements.",
];

export default function WarrantyPage() {
  return (
    <>
      {/* INTRO */}
      <section className="bg-white py-20">
        <Container>
          <PageBrand variant="light" />
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Warranty
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              Jandy Limited Warranty
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy/70">
              Zodiac Pool Systems LLC, a Fluidra Company (&ldquo;Fluidra&rdquo;),
              warrants all Jandy® branded products to be free from
              manufacturing defects in materials and workmanship for a
              period of one (1) year from the date of retail purchase, with
              the exceptions listed below. The complete salt water
              chlorinator system we install &mdash; controller and cell
              purchased and installed together &mdash; is covered for three
              (3) years.
            </p>
            <a
              href={jandyWarrantyPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:bg-gold-light transition-colors"
            >
              <DownloadIcon className="size-4" />
              Download the Full Warranty (PDF)
            </a>
            <p className="mt-3 text-xs text-navy/50">
              Document H0333803 Rev AB &middot; This page summarizes the
              official Jandy Limited Warranty. Always refer to the PDF above
              for the complete, current terms directly from the
              manufacturer.
            </p>
          </div>
        </Container>
      </section>

      {/* COVERAGE PERIODS */}
      <section className="bg-sand py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Coverage Periods
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              How long your equipment is covered
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-navy/10 bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {coveragePeriods.map((row, i) => (
                  <tr
                    key={row.item}
                    className={i !== coveragePeriods.length - 1 ? "border-b border-navy/10" : ""}
                  >
                    <td className="px-5 py-4 text-navy/80">{row.item}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-right font-bold text-navy">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-navy/60">
            <li>&bull; Refrigerant and other expendables are not warranted.</li>
            <li>
              &bull; Replacement products or parts provided at no charge are
              warranted only until the original product&rsquo;s warranty
              would have expired.
            </li>
            <li>
              &bull; TruGuard® mineral cartridges are covered under the
              separate Nature2 mineral cartridge limited warranty.
            </li>
          </ul>
        </Container>
      </section>

      {/* WHAT'S NOT COVERED */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Exclusions
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              What this warranty doesn&rsquo;t cover
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              This warranty applies only to products installed and serviced
              by a licensed, qualified pool equipment contractor, purchased
              and used in the 50 United States or Canada. It&rsquo;s limited
              to the first retail purchaser, is not transferable, and
              doesn&rsquo;t apply to products moved from their original
              installation site. It also does not apply to products
              purchased through the internet or other e-commerce platforms
              (with limited exceptions for small valves, parts, and
              accessories). Fluidra&rsquo;s liability is limited to
              replacement of the defective product or parts &mdash; it does
              not cover transportation costs, labor, or materials needed to
              make the repair.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              This warranty does not cover failures, defects, malfunctions,
              or complaints resulting from any of the following:
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {notCoveredCauses.map((cause) => (
              <li
                key={cause}
                className="flex gap-3 rounded-lg border border-navy/10 bg-mist p-4 text-sm leading-relaxed text-navy/70"
              >
                <XIcon className="size-4 shrink-0 mt-0.5 text-navy/40" />
                {cause}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* OTHER TERMS */}
      <section className="bg-sand py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Additional Terms
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
              The fine print
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-navy/70">
              <p>
                This is the only warranty given by Fluidra. No one is
                authorized to make any other warranties on behalf of
                Fluidra. The duration of implied warranties, including the
                implied warranty of merchantability and the implied warranty
                of fitness for a particular purpose, are limited to the
                duration of the express warranties listed above. Some states
                and/or provinces do not allow limitations on how long an
                implied warranty lasts, so the above limitation may not
                apply to you. For products installed in a commercial
                application, all implied warranties are expressly disclaimed
                in their entirety.
              </p>
              <p>
                Fluidra expressly disclaims and excludes any liability for
                consequential, incidental, indirect, or punitive damages for
                breach of any expressed or implied warranty, including
                damage to vinyl liners, plaster, pool surfaces, tile, stone,
                coping, fixtures, skimmers, plumbing, drains, equipment
                covers, landscaping, animals, plants, or dwellings. Some
                states and/or provinces do not allow the exclusion or
                limitation of incidental or consequential damages, so the
                above limitation may not apply to you.
              </p>
              <p>
                This warranty gives you specific legal rights. You may also
                have other rights that vary by state and/or province.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW TO FILE A CLAIM */}
      <section className="bg-navy py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">
              Filing a Claim
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
              Something not working right?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              As your installer, we&rsquo;re happy to help walk you through
              a warranty claim. For warranty consideration, have the
              following ready: proof of purchase, model number, serial
              number, date of retail purchase, and date of installation.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="size-4 shrink-0 mt-0.5 text-gold" />
                Call {siteConfig.name} at {siteConfig.phone} and we&rsquo;ll
                help get the claim started.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="size-4 shrink-0 mt-0.5 text-gold" />
                Or contact Fluidra&rsquo;s Technical Support directly at
                800-822-7933 or productsupport@fluidra.com.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* DOWNLOADS */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
              Downloads
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-navy">
              Warranty &amp; brochures
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={jandyWarrantyPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-navy/15 px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:border-gold transition-colors"
            >
              <DownloadIcon className="size-4" />
              Jandy Limited Warranty (PDF)
            </a>
            <a
              href="/brochures/jandy-truclear-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-navy/15 px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy hover:border-gold transition-colors"
            >
              <DownloadIcon className="size-4" />
              TruClear Product Brochure (PDF)
            </a>
          </div>
          <p className="mt-6 text-xs text-navy/40">
            &copy; 2025 Fluidra. All rights reserved. Jandy and associated
            trademarks are the property of their respective owners.
          </p>
        </Container>
      </section>
    </>
  );
}
