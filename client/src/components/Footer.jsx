import { useState } from "react";
import { Link } from "react-router-dom";
import companyLogoImage from "../assets/companyLogo.png";
import {
  getNewsletterConfigError,
  sendNewsletterSubscription,
} from "../lib/newsletter";
import { openConsentPreferences } from "../utils/consentManager";

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "Cybersecurity", to: "/services/cybersecurity" },
      { label: "Managed SOC", to: "/services/managed-soc" },
      { label: "Cloud Security", to: "/services/cloud-security" },
      { label: "Network Security", to: "/services/network-security" },
      { label: "AI Security", to: "/services/ai-security" },
      { label: "Enterprise Security", to: "/services/enterprise-security" },
      { label: "VAPT Services", to: "/services/vapt" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blogs", to: "/blog" },
      { label: "White Papers", to: "/white-papers" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Threat Report", to: "/threat-report" },
      { label: "Compliance Guides", to: "/compliance-guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Partners", to: "/partners" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/policy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Data Protection Policy", to: "/data-protection" },
      { label: "Cookie Policy", to: "/cookies" },
      { label: "Cookie Preferences", action: "cookie-preferences" },
      { label: "Responsible Disclosure", to: "/responsible-disclosure" },
    ],
  },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle");
  const [newsletterFeedback, setNewsletterFeedback] = useState("");
  const configError = getNewsletterConfigError();

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterStatus("error");
      setNewsletterFeedback("Enter your email to subscribe.");
      return;
    }

    setNewsletterStatus("loading");
    setNewsletterFeedback("");

    try {
      await sendNewsletterSubscription({
        email: newsletterEmail.trim(),
        preferences: ["Threat Reports", "Product Updates"],
        source: "footer",
      });

      setNewsletterStatus("success");
      setNewsletterFeedback("You are subscribed for upcoming briefings.");
      setNewsletterEmail("");
    } catch (error) {
      console.error("Footer newsletter error:", error);
      setNewsletterStatus("error");
      setNewsletterFeedback(
        error.message || "Subscription failed. Please try again."
      );
    }
  };

  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/[0.08] bg-[#000000] pt-16">
      <div className="relative z-10 mx-auto grid max-w-screen-2xl gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-12 lg:px-16 xl:px-24 text-center sm:text-left">
        <div className="space-y-6 lg:col-span-4 flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="Netcradus logo"
              className="h-18 w-auto object-contain mx-auto sm:mx-0"
            />
          </div>

          <div className="space-y-3 text-base sm:text-[17px] leading-relaxed text-[#FFFFFF] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            <p>
              Netcradus engineers the future of cyber defense. Through our ACIS
              platform, we combine AI-driven threat detection, automated
              response, and enterprise-grade resilience to protect what matters
              most — before threats even strike.
            </p>
          </div>

          <div className="space-y-3 w-full">
            <div className="text-sm leading-normal space-y-1.5 text-[#FFFFFF] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              <div>
                <strong>CIN:</strong> U62090UP2025PTC229722
              </div>
              <div>
                <strong>GSTIN:</strong> 09AAKCN7195G1ZV
              </div>
            </div>

            <div className="pt-1 text-base leading-relaxed text-[#FFFFFF] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] space-y-2">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <a
                  href="mailto:info@netcradus.com"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-[#FF7900] py-1 break-all min-h-[44px]"
                >
                  <span>📧 info@netcradus.com</span>
                </a>

                <a
                  href="tel:1800121008800"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-[#FF7900] py-1 min-h-[44px]"
                >
                  <span>📞 1800 121 008800</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-4">
                <a
                  href="https://instagram.com/netcradus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/netcradus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/netcradus-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@Netcradus-acis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                <a
                  href="https://x.com/Netcraduspvtltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110 hover:bg-zinc-800"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2H21.5l-7.12 8.14L22.75 22h-6.56l-5.14-6.72L5.18 22H1.92l7.62-8.71L1.25 2h6.73l4.65 6.14L18.244 2Zm-1.15 18h1.82L7.01 3.9H5.05L17.09 20Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Columns: Solutions, Resources, Company, Legal */}
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 text-left">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF7A00] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                {column.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.action === "cookie-preferences" ? (
                      <button
                        type="button"
                        onClick={openConsentPreferences}
                        className="inline-block py-1 text-[#FFFFFF] font-medium transition-colors duration-200 hover:text-[#FF7900] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] min-h-[36px] flex items-center bg-transparent border-none p-0 cursor-pointer text-left text-sm"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.to}
                        className="inline-block py-1 text-[#FFFFFF] font-medium transition-colors duration-200 hover:text-[#FF7900] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] min-h-[36px] flex items-center"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t border-white/[0.08] pt-6 pb-24 md:pb-24 lg:pb-20">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-4 px-4 text-sm text-[#FFFFFF] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:px-6 lg:px-16 xl:px-24">
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <Link to="/policy" className="transition-colors duration-200 hover:text-[#FF7900]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors duration-200 hover:text-[#FF7900]">
              Terms of Service
            </Link>
            <Link to="/cookies" className="transition-colors duration-200 hover:text-[#FF7900]">
              Cookie Policy
            </Link>
            <button
              type="button"
              onClick={openConsentPreferences}
              className="bg-transparent border-none p-0 text-[#FFFFFF] font-medium transition-colors duration-200 hover:text-[#FF7900] cursor-pointer text-sm"
            >
              Cookie Preferences
            </button>
          </div>

          <p className="text-center">© 2026 Netcradus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}