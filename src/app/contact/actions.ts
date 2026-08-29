"use server";

export type QuoteRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  howHeard: string;
  poolSize: string;
  hasSaltSystem: boolean;
  poolPhoto: File | null;
  preferredDay: string;
  preferredTime: string;
};

// TODO: wire this up to a real destination (email service, CRM, etc.) once
// the client has credentials for one. For now it just logs the lead so
// nothing is silently lost.
export async function submitQuoteRequest(data: QuoteRequest) {
  if (!data.firstName.trim() || !data.phone.trim() || !data.email.trim()) {
    throw new Error("Missing required fields");
  }

  const { poolPhoto, ...rest } = data;
  console.log("New quote request:", JSON.stringify(rest));
  if (poolPhoto) {
    console.log(
      `Pool photo attached: ${poolPhoto.name} (${poolPhoto.size} bytes, ${poolPhoto.type})`,
    );
  }

  return { success: true as const };
}
