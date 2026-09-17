import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon } from "@/components/icons";

export default function PageBrand({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col items-center pb-8">
      <Link href="/">
        <Image
          src="/assets/images/shared/logo.png"
          alt={siteConfig.name}
          width={440}
          height={112}
          style={{ height: "6.5rem", width: "auto" }}
          className={isDark ? "brightness-0 invert" : undefined}
        />
      </Link>
      <a
        href={siteConfig.phoneHref}
        className={`mt-1.5 flex items-center gap-1.5 text-lg font-extrabold transition-colors ${
          isDark ? "text-white hover:text-gold-light" : "text-navy hover:text-gold-dark"
        }`}
      >
        <PhoneIcon className={`size-4 shrink-0 ${isDark ? "text-gold" : "text-gold-dark"}`} />
        {siteConfig.phone}
      </a>
    </div>
  );
}
