export const siteConfig = {
  name: "King of Salt Pools",
  tagline: "The Royal Way to Sanitize Your Pool",
  serviceArea: "Tampa Bay Area",
  phone: "(855) 520-7665",
  phoneHref: "tel:+18555207665",
  email: "kingofsaltpoolsfl@gmail.com",
  // TODO: confirm real business hours with the client.
  hours: "Mon–Fri 9:00 AM – 5:00 PM",
  license: "Lic. #CPC1459279",
} as const;

export const navLinks = [
  { href: "/why-salt", label: "Why Salt?" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/warranty", label: "Warranty" },
] as const;

export const quoteHref = "/quote";

// TODO: confirm the exact service area / city list with the client.
export const serviceAreaCities = [
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Wesley Chapel",
  "Brandon",
  "Riverview",
  "Land O' Lakes",
  "New Tampa",
  "Lutz",
  "Largo",
  "Palm Harbor",
  "Valrico",
] as const;
