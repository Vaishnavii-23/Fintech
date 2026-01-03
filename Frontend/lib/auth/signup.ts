import type { SignupValues } from "../validations/auth";

const SIMULATED_DELAY_MS = 1200;

export class SignupRequestError extends Error {}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function signup(values: SignupValues): Promise<void> {
  // Mirror real backend latency to exercise loading states in the UI.
  await delay(SIMULATED_DELAY_MS);

  if (values.email.toLowerCase().endsWith("@blocked.com")) {
    throw new SignupRequestError(
      "Signups from this email domain are temporarily unavailable."
    );
  }
}
