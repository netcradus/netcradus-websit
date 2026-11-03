import React, { useEffect, useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import FormPrivacyNotice from "../components/ui/FormPrivacyNotice";
import { usePageMeta } from "../hooks/usePageMeta";
import { getNewsletterConfigError, sendNewsletterSubscription } from "../lib/newsletter";
import { SEO_META } from "../data/seoMeta";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [preferences, setPreferences] = useState(["Threat Reports"]);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const configError = useMemo(() => getNewsletterConfigError(), []);

  usePageMeta(SEO_META.newsletter.title, SEO_META.newsletter.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePreference = (value) => {
    setPreferences((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setFeedback("Please enter your work email.");
      return;
    }

    if (preferences.length === 0) {
      setStatus("error");
      setFeedback("Select at least one content preference.");
      return;
    }

    if (!privacyConsent) {
      setStatus("error");
      setFeedback("You must agree to the Privacy Policy to subscribe.");
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      await sendNewsletterSubscription({
        email: email.trim(),
        preferences,
        source: "newsletter-page",
      });

      setStatus("success");
      setFeedback("Subscription received. We will send the next briefing to your inbox.");
      setEmail("");
      setPreferences(["Threat Reports"]);
      setPrivacyConsent(false);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
      setFeedback(error.message || "Subscription failed. Please try again.");
    }
  };

  return (
    <div className="bg-background transition-colors duration-500">
      <PageHero
        label="// NEWSLETTER"
        title="Stay Ahead of Cyber Threats"
        subtitle="Join thousands of security professionals receiving Netcradus threat intelligence, product updates, and industry insights."
        media={
          <div className="rounded-[30px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_42%),var(--color-surface)] p-4 shadow-[0_18px_60px_rgba(232,64,10,0.08)]">
            <img
              src="/generated/cyber_server_room_1773394493658.png"
              alt="Netcradus newsletter"
              className="h-[320px] w-full rounded-[24px] object-cover"
            />
          </div>
        }
      />

      <section className="py-0">
        <div className="container mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-16">
          <div className="premium-card rounded-[32px] border border-border bg-[var(--color-surface)]/85 p-8 shadow-[0_24px_80px_rgba(232,64,10,0.08)] backdrop-blur-xl md:p-12">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="newsletter-email" className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  Work Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@company.com"
                  className="w-full rounded-2xl border border-border bg-transparent px-5 py-5 text-lg text-text-primary outline-none transition focus:border-accent/40 focus:shadow-[0_0_24px_rgba(232,64,10,0.12)]"
                />
              </div>

              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">Content Preferences</div>
                <div className="flex flex-wrap gap-3">
                  {["Threat Reports", "Product Updates", "Blog Digest"].map((option) => {
                    const active = preferences.includes(option);
                    return (
                      <label
                        key={option}
                        className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition ${
                          active
                            ? "border-accent/40 bg-accent/10 text-text-primary shadow-[0_0_22px_rgba(232,64,10,0.12)]"
                            : "border-border bg-[var(--color-surface)] text-text-secondary hover:border-accent/20"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={active}
                          onChange={() => togglePreference(option)}
                          className="sr-only"
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              </div>

              {configError && (
                <p className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                  {configError}
                </p>
              )}

              {feedback && (
                <p
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                      : "border-red-500/30 bg-red-500/10 text-red-200"
                  }`}
                >
                  {feedback}
                </p>
              )}

              <div className="text-left">
                <FormPrivacyNotice
                  purpose="sending the newsletter and the content categories you select"
                  showUnsubscribe={true}
                  requireConsent={true}
                  consentChecked={privacyConsent}
                  onConsentChange={setPrivacyConsent}
                  id="newsletter-page-privacy-consent"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || Boolean(configError)}
                className="btn-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_36px_rgba(232,64,10,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
