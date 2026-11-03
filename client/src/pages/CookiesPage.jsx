import React, { useEffect } from "react";
import LegalPageTemplate from "../components/LegalPageTemplate";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const sections = [
  {
    heading: "1. Overview of Technologies Used",
    paragraphs: [
      "Netcradus uses cookies, local storage, scripts, pixels, and similar web technologies across our website (www.netcradus.com) to ensure platform security, deliver core functionality, evaluate site performance, and enable optional interactive features.",
      "In accordance with modern privacy standards and India's Digital Personal Data Protection Act, 2023 (DPDP Act), optional tracking technologies are not loaded or executed on your device unless you provide explicit prior consent through our Cookie Preferences mechanism.",
    ],
  },
  {
    heading: "2. Categories of Technologies and Purpose",
    paragraphs: [
      "We categorize our web technologies into four distinct functional tiers:",
      "• Necessary Technologies (Always Active): Essential for the secure and proper operation of the website. These include local storage keys such as 'netcradus_consent_preferences_v1' to record your privacy choices, 'netcradus_newsletter_subscribed' to remember your newsletter interaction, and essential security controls such as Cloudflare Turnstile. Because these technologies are strictly required for core security, anti-bot protection, and platform operations, they operate independently of advertising or analytics consent.",
      "• Analytics and Diagnostic Technologies (Consent-Gated): Used to understand aggregate usage trends, page interactions, and technical performance. Specific technologies include Google Tag Manager and the Netcradus Operational Logger (hosted on Render). These scripts and network requests are completely blocked until you explicitly enable Analytics cookies.",
      "• Marketing and Attribution Technologies (Consent-Gated): Used to evaluate campaign effectiveness and deliver relevant cybersecurity communications. Specific technologies include the Meta Pixel and Google Ads Tag. These pixels and third-party tracking scripts remain inactive until you explicitly grant Marketing consent.",
      "• Functional and Interactive Technologies (Consent-Gated): Used to deliver enhanced interactive website features, specifically third-party embeds such as Google Maps on our Contact page. When functional consent is withheld, external map frames and associated third-party network connections are withheld and replaced with an interactive placeholder.",
    ],
  },
  {
    heading: "3. Detailed Technology Inventory",
    paragraphs: [
      "The following specific technologies are utilized across the Netcradus platform:",
      "• netcradus_consent_preferences_v1: LocalStorage key used to store your granular consent choices across visits (Category: Necessary).",
      "• netcradus_newsletter_subscribed: LocalStorage key used to store your newsletter subscription status ('true') to prevent repeating the subscription dialog after you subscribe (Category: Necessary / Functional User State).",
      "• Cloudflare Turnstile: Essential Security Technology loaded on public form submissions (such as our Contact form) for automated anti-bot verification and anti-spam protection. Turnstile performs privacy-preserving security verification and is not used for advertising, cross-site tracking, or marketing analytics (Category: Necessary Security).",
      "• Google Tag Manager (GTM-TNL6NL5J): Script-based tag management container used for telemetry orchestration (Category: Analytics, Requires Consent).",
      "• Netcradus Logger (netcradus-logger.onrender.com): Operational API endpoint used for technical and operational telemetry including path, status, and client metadata (Category: Analytics, Requires Consent).",
      "• Meta Pixel (26534633586193572): Tracking pixel for conversion attribution and audience measurement (Category: Marketing, Requires Consent).",
      "• Google Ads Tag (AW-17901971362): Conversion tracking script for search and display campaigns (Category: Marketing, Requires Consent).",
      "• Google Maps Embed: External iframe resource for interactive headquarters navigation (Category: Functional, Requires Consent).",
    ],
  },
  {
    heading: "4. Managing and Withdrawing Consent",
    paragraphs: [
      "You have complete granular control over optional cookies and tracking technologies. When you first visit the Netcradus website, no non-essential scripts or tracking pixels are executed until you make a choice.",
      "You may update your preferences or withdraw your consent at any time via the 'Cookie Preferences' link in the footer of any page.",
      "Upon withdrawing consent for a category, Netcradus immediately halts telemetry, removes injected third-party scripts from the active document, disables runtime tracking APIs, and purges accessible first-party domain cookies (such as _ga or _fbp) associated with that category.",
      "Please note: First-party cookies set on the Netcradus domain are cleared directly by our consent mechanism upon withdrawal. However, cookies set directly by third-party external domains (e.g., under .google.com or .facebook.com within external frames) are protected by browser Same-Origin Policy security rules and cannot be directly deleted by client-side JavaScript. Withdrawing consent ensures no further network requests, tracking scripts, or data transmissions occur from our website.",
      "You can also manage or clear cookies through your web browser settings. Disabling all local storage and essential cookies may impact the website's ability to remember your preferences and function securely.",
    ],
  },
  {
    heading: "5. Policy Updates",
    paragraphs: [
      "Netcradus may update this Cookie Policy from time to time to reflect changes in the technologies we use, operational adjustments, or evolving legal and regulatory guidance under India's DPDP Act, 2023. Changes take effect upon publication on this page.",
      "If you have questions regarding our use of cookies or privacy practices, please contact us at privacy@netcradus.com or info@netcradus.com.",
    ],
  },
];

export default function CookiesPage() {
  usePageMeta(SEO_META.cookies.title, SEO_META.cookies.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalPageTemplate
      title="Cookie Policy"
      description="Detailed disclosure of cookies, local storage, scripts, pixels, and tracking technologies used on the Netcradus website."
      lastUpdated="September 1, 2026"
      sections={sections}
    />
  );
}
