import { serviceAreaCities, siteConfig } from "@/lib/site-config";
import { MapPinIcon } from "@/components/icons";

export default function ServiceArea() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="flex items-center gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
            Areas We Serve
          </p>
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-navy">
          Bringing Saltwater to Pools Across the Tampa Bay
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/70">
          Wherever your pool sits in the bay area, our crew can get a salt
          system installed and dialed in. Not sure if you&rsquo;re in range?
          Reach out and ask — we&rsquo;re happy to check.
        </p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {serviceAreaCities.map((city) => (
            <li
              key={city}
              className="inline-flex items-center gap-2 rounded-lg border border-navy/10 bg-white px-4 py-3 text-sm font-semibold text-navy"
            >
              <MapPinIcon className="size-4 shrink-0 text-gold-dark" />
              {city}
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
        <iframe
          title={`Map of the ${siteConfig.serviceArea} service area`}
          src="https://www.google.com/maps?q=Tampa,FL&output=embed"
          className="h-[420px] w-full lg:h-[520px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
