"use server";

export type QuoteRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  howHeard: string;
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

  console.log("New quote request:", JSON.stringify(data));

  return { success: true as const };
}
