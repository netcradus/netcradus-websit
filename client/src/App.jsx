



// import { Routes, Route, Outlet, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { sendLog } from "./utils/logger";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import FloatingContact from "./components/FloatingContact";
// import NewsletterPopup from "./components/NewsletterPopup";
// import WhatsAppButton from "./components/WhatsAppButton";
// import CookieConsent from "./components/CookieConsent";

// import HomePage from "./pages/HomePage";
// import ServicesPage from "./pages/ServicesPage";
// import ACISPage from "./pages/ACISPage";
// import NetXDRPage from "./pages/NetXDRPage";
// import CRMPage from "./pages/CRMPage";
// import NetCradPage from "./pages/NetCradPage";
// import AboutPage from "./pages/AboutPage";
// import BlogPage from "./pages/BlogPage";
// import BlogPostPage from "./pages/BlogPostPage";
// import ContactPage from "./pages/ContactPage";
// import CareersPage from "./pages/CareersPage";
// import ResourcesPage from "./pages/ResourcesPage";
// import NewsletterPage from "./pages/NewsletterPage";
// import PolicyPage from "./pages/PolicyPage";
// import TermsPage from "./pages/TermsPage";
// import DataProtectionPage from "./pages/DataProtectionPage";
// import CookiesPage from "./pages/CookiesPage";
// import ResponsibleDisclosurePage from "./pages/ResponsibleDisclosurePage";
// import PhasePage from "./pages/phasePage";
// import Partners from "./pages/Partners";
// import PartnerApply from "./pages/PartnerApply";

// import Platform from "./components/Platform";
// import { useReveal } from "./hooks/useReveal";

// function AppLayout() {
//   useReveal();

//   const location = useLocation();

//   useEffect(() => {

//   // Send log to Render logger
//   sendLog(location.pathname);

//   // Facebook Pixel
//   if (window.fbq) {
//     window.fbq("track", "PageView");
//   }

//   // Google Analytics
//   if (window.gtag) {
//     window.gtag("event", "page_view", {
//       page_path: location.pathname,
//     });
//   }

// }, [location]);

//   return (
//     <div className="bg-background min-h-screen text-text-primary font-sans overflow-x-hidden pt-20 transition-colors duration-500 selection:bg-accent/30">

//       <div className="fixed inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none transition-opacity duration-1000"></div>

//       <div
//         className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
//         style={{
//           backgroundImage:
//             `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//         }}
//       ></div>

//       <Navbar />
//       <CookieConsent />
//       <FloatingContact />
//       <WhatsAppButton />
//       <NewsletterPopup />

//       <main className="relative z-10 w-full">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <ScrollToTop />

//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="platform" element={<Platform />} />
//           <Route path="services" element={<ServicesPage />} />
//           <Route path="acis" element={<ACISPage />} />
//           <Route path="netxdr" element={<NetXDRPage />} />
//           <Route path="crm" element={<CRMPage />} />
//           <Route path="netcrad" element={<NetCradPage />} />
//           <Route path="about" element={<AboutPage />} />
//           <Route path="blog" element={<BlogPage />} />
//           <Route path="blog/:slug" element={<BlogPostPage />} />
//           <Route path="contact" element={<ContactPage />} />
//           <Route path="careers" element={<CareersPage />} />
//           <Route path="resources" element={<ResourcesPage />} />
//           <Route path="newsletter" element={<NewsletterPage />} />
//           <Route path="policy" element={<PolicyPage />} />
//           <Route path="terms" element={<TermsPage />} />
//           <Route path="data-protection" element={<DataProtectionPage />} />
//           <Route path="cookies" element={<CookiesPage />} />
//           <Route path="responsible-disclosure" element={<ResponsibleDisclosurePage />} />
//           <Route path="phase" element={<PhasePage />} />
//           <Route path="partners" element={<Partners />} />
//           <Route path="partners/apply" element={<PartnerApply />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { sendLog } from "./utils/logger";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterPopup from "./components/NewsletterPopup";
import NetcradusChatbot from "./components/chatbot/NetcradusChatbot";
import CookieConsent from "./components/CookieConsent";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import CyberSecurityPage from "./pages/services/CyberSecurity";
import ManagedSOCPage from "./pages/services/ManagedSOC";
import CloudSecurityPage from "./pages/services/CloudSecurity";
import AISecurityPage from "./pages/services/AISecurity";
import NetworkSecurityPage from "./pages/services/NetworkSecurity";
import EnterpriseSecurityPage from "./pages/services/EnterpriseSecurity";
import VAPTPage from "./pages/services/VAPT";
import ABDMPage from "./pages/services/ABDM";
import IAMPage from "./pages/services/IAM";
import ACISPage from "./pages/ACISPage";
import CRMPage from "./pages/CRMPage";
import NetXDRPage from "./pages/NetXDRPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import ResourcesPage from "./pages/ResourcesPage";
import NewsletterPage from "./pages/NewsletterPage";
import PolicyPage from "./pages/PolicyPage";
import TermsPage from "./pages/TermsPage";
import DataProtectionPage from "./pages/DataProtectionPage";
import CookiesPage from "./pages/CookiesPage";
import ResponsibleDisclosurePage from "./pages/ResponsibleDisclosurePage";
import PhasePage from "./pages/phasePage";
import Partners from "./pages/Partners";
import PartnerApply from "./pages/PartnerApply";
import NetCradPage from "./pages/NetCradPage";
import WhyNetcradusPage from "./pages/WhyNetcradusPage";
import AcisLitePricing from "./pages/AcisLitePricing";
import AcisProPricing from "./pages/AcisProPricing";
import AcisEnterprisePricing from "./pages/AcisEnterprisePricing";
import AdminInquiries from "./pages/AdminInquiries";
import ComplianceGuidesPage from "./pages/ComplianceGuidesPage";
import ThreatReportsPage from "./pages/ThreatReportsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import WhitePapersPage from "./pages/WhitePapersPage";

import Platform from "./components/Platform";
import EndpointDetectionPage from "./pages/EndpointDetectionPage";
import SIEMPage from "./pages/SIEMPage";
import SOARPage from "./pages/SOARPage";
import CTIPage from "./pages/CTIPage";
import PAMPage from "./pages/PAMPage";
import GRCPage from "./pages/GRCPage";
import AISecurityPlatformPage from "./pages/AISecurityPlatformPage";
import { useReveal } from "./hooks/useReveal";
import {
  syncTrackingServices,
  hasConsent,
  CONSENT_CATEGORIES,
} from "./utils/consentManager";

function AppLayout() {
  useReveal();

  const location = useLocation();
  const isFirstMount = useRef(true);
  const prevPathRef = useRef(location.pathname);

  // Initialize permitted tracking services on initial mount based on stored consent
  useEffect(() => {
    syncTrackingServices();
  }, []);

  /**
   * SPA Route Tracking & Consent Enforcement
   * - Initial PageView: Owned and fired once by `consentManager.js` (`loadMetaPixel()`) upon script injection.
   * - Route Transitions: Handled here for subsequent SPA navigations when consent is granted.
   */
  useEffect(() => {
    // On initial mount: send telemetry if consented; Meta Pixel initial PageView is handled in loadMetaPixel()
    if (isFirstMount.current) {
      isFirstMount.current = false;
      if (hasConsent(CONSENT_CATEGORIES.ANALYTICS)) {
        sendLog(location.pathname);
      }
      return;
    }

    // On subsequent SPA route transitions:
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;

      // 1. Send log to Render logger (only if analytics consent is granted)
      if (hasConsent(CONSENT_CATEGORIES.ANALYTICS)) {
        sendLog(location.pathname);
      }

      // 2. Facebook Pixel (only if marketing consent is granted)
      if (hasConsent(CONSENT_CATEGORIES.MARKETING) && window.fbq && typeof window.fbq === "function") {
        window.fbq("track", "PageView");
      }

      // 3. Google Analytics (only if analytics consent is granted)
      if (hasConsent(CONSENT_CATEGORIES.ANALYTICS) && window.gtag && typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_path: location.pathname,
        });
      }
    }
  }, [location]);

  return (
    <div className="bg-[#05060A] min-h-screen text-text-primary font-sans overflow-x-hidden pt-[52px] transition-colors duration-500 selection:bg-accent/30 relative">

      {/* Enterprise Cyberpunk Ambient Glow Background System (Splunk / Linear / Stripe) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#05060A]">
        {/* Glow 1: Large Radial Glow from Right Side */}
        <div className="cyber-glow-r absolute top-[20%] -right-[5%] w-[300px] h-[300px] sm:w-[800px] sm:h-[800px] rounded-full bg-[radial-gradient(circle_at_center,#FF2D95_0%,#D946EF_50%,transparent_75%)] opacity-14 blur-[80px] sm:blur-[140px] animate-cyberpunk-glow" />

        {/* Glow 2: Radial Glow from Bottom Right Corner */}
        <div className="cyber-glow-br absolute -bottom-[15%] -right-[5%] w-[300px] h-[300px] sm:w-[750px] sm:h-[750px] rounded-full bg-[radial-gradient(circle_at_center,#8B5CF6_0%,transparent_70%)] opacity-16 blur-[80px] sm:blur-[130px] animate-cyberpunk-glow-delay" />

        {/* Glow 3: Soft Magenta Glow behind AI Section */}
        <div className="cyber-glow-ai absolute top-[55%] right-[5%] w-[250px] h-[250px] sm:w-[600px] sm:h-[600px] rounded-full bg-[radial-gradient(circle_at_center,#D946EF_0%,transparent_65%)] opacity-10 blur-[80px] sm:blur-[135px] animate-cyberpunk-glow-slow" />

        {/* Glow 4: Subtle Purple Glow on Left Side for Balance */}
        <div className="cyber-glow-l absolute top-[35%] -left-[5%] w-[300px] h-[300px] sm:w-[700px] sm:h-[700px] rounded-full bg-[radial-gradient(circle_at_center,#6D28D9_0%,#8B5CF6_45%,transparent_70%)] opacity-9 blur-[80px] sm:blur-[135px] animate-cyberpunk-glow-slow" />

        {/* Dark Center Radial Mask for High Text Contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(5,6,10,0.85)_0%,rgba(5,6,10,0.4)_60%,transparent_100%)] pointer-events-none" />

        {/* Soft Vignette Overlay for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_45%,rgba(5,6,10,0.85)_100%)] pointer-events-none" />
      </div>

      <Navbar />
      <CookieConsent />
      <NetcradusChatbot />
      <NewsletterPopup />

      <main className="relative z-10 w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="platform" element={<Platform />} />
          <Route path="platform/endpoint-detection" element={<EndpointDetectionPage />} />
          <Route path="endpoint-detection" element={<Navigate to="/platform/endpoint-detection" replace />} />
          <Route path="platform/xdr" element={<EndpointDetectionPage />} />
          <Route path="xdr" element={<Navigate to="/platform/endpoint-detection" replace />} />
          <Route path="platform/siem" element={<SIEMPage />} />
          <Route path="siem" element={<Navigate to="/platform/siem" replace />} />
          <Route path="platform/soar" element={<SOARPage />} />
          <Route path="soar" element={<Navigate to="/platform/soar" replace />} />
          <Route path="platform/cti" element={<CTIPage />} />
          <Route path="cti" element={<Navigate to="/platform/cti" replace />} />
          <Route path="platform/pam" element={<PAMPage />} />
          <Route path="pam" element={<Navigate to="/platform/pam" replace />} />
          <Route path="platform/grc" element={<GRCPage />} />
          <Route path="grc" element={<Navigate to="/platform/grc" replace />} />
          <Route path="platform/ai-security" element={<AISecurityPlatformPage />} />
          <Route path="ai-security" element={<Navigate to="/platform/ai-security" replace />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/cybersecurity" element={<CyberSecurityPage />} />
          <Route path="services/managed-soc" element={<ManagedSOCPage />} />
          <Route path="services/cloud-security" element={<CloudSecurityPage />} />
          <Route path="services/ai-security" element={<AISecurityPage />} />
          <Route path="services/network-security" element={<NetworkSecurityPage />} />
          <Route path="services/enterprise-security" element={<EnterpriseSecurityPage />} />
          <Route path="services/vapt" element={<VAPTPage />} />
          <Route path="services/abdm" element={<ABDMPage />} />
          <Route path="services/iam" element={<IAMPage />} />
          <Route path="acis" element={<ACISPage />} />
          <Route path="crm" element={<CRMPage />} />
          <Route path="netxdr" element={<NetXDRPage />} />
          <Route path="netcrad" element={<NetCradPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="why-netcradus" element={<WhyNetcradusPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="white-papers" element={<WhitePapersPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="compliance-guides" element={<ComplianceGuidesPage />} />
          <Route path="threat-reports" element={<ThreatReportsPage />} />
          <Route path="threat-report" element={<ThreatReportsPage />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="policy" element={<PolicyPage />} />
          <Route path="privacy" element={<Navigate to="/policy" replace />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="data-protection" element={<DataProtectionPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="responsible-disclosure" element={<ResponsibleDisclosurePage />} />
          <Route path="phase" element={<PhasePage />} />
          <Route path="partners" element={<Partners />} />
          <Route path="partners/apply" element={<PartnerApply />} />
          <Route path="pricing/acis-lite" element={<AcisLitePricing />} />
          <Route path="pricing/acis-pro" element={<AcisProPricing />} />
          <Route path="pricing/acis-enterprise" element={<AcisEnterprisePricing />} />
          <Route path="admin/inquiries" element={<AdminInquiries />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;