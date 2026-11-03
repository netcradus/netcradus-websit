import emailjs from "@emailjs/browser";

const serviceId =
  import.meta.env.VITE_EMAILJS_NEWSLETTER_SERVICE_ID ||
  import.meta.env.VITE_EMAILJS_SERVICE_ID ||
  "service_0b2gu7w";
const templateId =
  import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID ||
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
  "template_0eug8b5";
const publicKey =
  import.meta.env.VITE_EMAILJS_NEWSLETTER_PUBLIC_KEY ||
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
  "ezgqG6Hon-z8nuFTU";

export function getNewsletterConfigError() {
  if (!serviceId || !templateId || !publicKey) {
    return "Newsletter service is not configured yet. Please add the EmailJS environment keys.";
  }

  return "";
}

export async function sendNewsletterSubscription({
  email,
  preferences = [],
  source = "website",
}) {
  const configError = getNewsletterConfigError();

  if (configError) {
    throw new Error(configError);
  }

  const preferenceList = preferences.length ? preferences.join(", ") : "General updates";

  return emailjs.send(
    serviceId,
    templateId,
    {
      name: "Newsletter Subscriber",
      email,
      company: "N/A",
      phone: "N/A",
      source,
      subscription_source: source,
      preferences: preferenceList,
      message: `Newsletter subscription request from ${email}. Preferences: ${preferenceList}. Source: ${source}.`,
    },
    publicKey
  );
}
