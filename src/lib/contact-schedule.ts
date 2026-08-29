export const contactDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

// Half-hour slots from 8:00 AM through 4:30 PM, so every slot's 30-minute
// window ends by 5:00 PM.
export const contactTimeSlots: string[] = Array.from({ length: 18 }, (_, i) => {
  const totalMinutes = 8 * 60 + i * 30;
  const hour24 = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${minute.toString().padStart(2, "0")} ${period}`;
});

export const howHeardOptions = [
  "Google Search",
  "Social Media",
  "Friend or Family Referral",
  "Jandy Dealer Referral",
  "Saw Our Truck",
  "Other",
] as const;

export const poolSizeOptions = [
  "Under 15,000 gallons",
  "15,000–25,000 gallons",
  "25,000–35,000 gallons",
  "Over 35,000 gallons",
  "Not sure",
] as const;
