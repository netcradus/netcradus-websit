import React, { useState, useEffect } from "react";
import { MapPin, Mail, Phone, Navigation, Clock, Globe, Shield } from "lucide-react";
import {
  hasConsent,
  saveConsent,
  getStoredConsent,
  subscribeConsent,
  CONSENT_CATEGORIES,
} from "../utils/consentManager";

export default function LocationMap() {
  const [canLoadMap, setCanLoadMap] = useState(() => hasConsent(CONSENT_CATEGORIES.FUNCTIONAL));

  useEffect(() => {
    const unsubscribe = subscribeConsent((updated) => {
      setCanLoadMap(Boolean(updated.categories?.[CONSENT_CATEGORIES.FUNCTIONAL]));
    });
    return unsubscribe;
  }, []);

  const handleEnableMap = () => {
    const current = getStoredConsent();
    const updatedCats = {
      ...current.categories,
      [CONSENT_CATEGORIES.FUNCTIONAL]: true,
    };
    saveConsent(current.decision || "custom", updatedCats);
    setCanLoadMap(true);
  };

  const offices = [
    {
      id: "india",
      flag: "🇮🇳",
      label: "India Headquarters",
      title: "India Headquarters",
      address: "G-260, Sector 63, Noida, UP, India",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM IST",
      email: "info@netcradus.com",
      phone: "+91 72909 09571",
      mapQuery: "G-260, Sector 63, Noida, Uttar Pradesh, India",
    },
    {
      id: "uk",
      flag: "🇬🇧",
      label: "United Kingdom Office",
      title: "United Kingdom Office",
      address: "London, United Kingdom",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM GMT",
      email: "info@netcradus.com",
      phone: "+44 7463358081",
      mapQuery: "London, United Kingdom",
    },
    {
      id: "us",
      flag: "🇺🇸",
      label: "United States Office",
      title: "Netcradus Inc.",
      address: "8 The Green, Suite B, Dover, DE 19901, United States",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM EST",
      email: "info@netcradus.com",
      mapQuery: "8 The Green, Suite B, Dover, DE 19901, United States",
    },
  ];

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 py-20 text-left">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="block text-[11px] font-bold uppercase tracking-[0.35em] text-accent mb-4">
          Find Us
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
          Our Offices
        </h2>
        <div className="h-[3px] w-20 bg-gradient-to-r from-accent to-accent-bright mt-4 mx-auto rounded-full" />
        <p className="mt-6 text-text-secondary text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Visit our offices or connect with our teams across regions. We're here to support your business wherever you are.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {offices.map((office) => {
          const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`;
          const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`;

          return (
            <div
              key={office.id}
              className="rounded-[20px] border border-accent/20 bg-surface/30 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between transition-all duration-350 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(232,64,10,0.15)] hover:-translate-y-1.5 group relative overflow-hidden"
            >
              {/* Map Embed or Privacy-Gated Placeholder */}
              <div className="relative w-full h-[350px] sm:h-[380px] rounded-[14px] overflow-hidden border border-white/10 z-10 bg-[#050B14]">
                {canLoadMap ? (
                  <iframe
                    title={`${office.title} map`}
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1] grayscale-[0.25] transition-all duration-500 group-hover:brightness-[0.9] group-hover:grayscale-0"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[radial-gradient(ellipse_at_center,#111827_0%,#030712_100%)]">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-3 shadow-lg">
                      <Globe size={24} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">
                      Interactive Map Protected
                    </h4>
                    <p className="text-xs text-gray-400 max-w-xs mb-4 leading-relaxed">
                      Loading interactive maps transmits your IP to Google. Click below to load the live map.
                    </p>
                    <button
                      type="button"
                      onClick={handleEnableMap}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/20 hover:bg-accent text-accent hover:text-white border border-accent/40 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
                    >
                      <Shield size={14} />
                      Load Interactive Map
                    </button>
                  </div>
                )}

                {/* Country Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                  <span className="text-sm">{office.flag}</span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">{office.label}</span>
                </div>
              </div>

              {/* Office Details */}
              <div className="flex flex-col flex-grow justify-between mt-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase transition-colors duration-300 group-hover:text-accent-bright">
                    {office.title}
                  </h3>

                  <div className="mt-6 flex flex-col gap-4 text-sm text-text-secondary">
                    {/* Full Address */}
                    <div className="flex gap-3.5 items-start">
                      <MapPin size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="leading-relaxed">{office.address}</span>
                    </div>

                    {/* Business Hours */}
                    <div className="flex gap-3.5 items-center">
                      <Clock size={18} className="text-accent shrink-0" strokeWidth={2} />
                      <span className="leading-none">{office.hours}</span>
                    </div>

                    {/* Phone Number */}
                    {office.phone && (
                      <div className="flex gap-3.5 items-center">
                        <Phone size={18} className="text-accent shrink-0" strokeWidth={2} />
                        <a
                          href={`tel:${office.phone.replace(/\s+/g, "")}`}
                          className="hover:text-accent transition-colors leading-none"
                        >
                          {office.phone}
                        </a>
                      </div>
                    )}

                    {/* Email Address */}
                    {office.email && (
                      <div className="flex gap-3.5 items-center">
                        <Mail size={18} className="text-accent shrink-0" strokeWidth={2} />
                        <a
                          href={`mailto:${office.email}`}
                          className="hover:text-accent transition-colors leading-none"
                        >
                          {office.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Get Directions Button */}
                <div className="mt-8">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border border-accent/30 bg-accent/5 hover:bg-accent text-accent hover:text-white hover:border-transparent transition-all duration-300 font-bold uppercase tracking-[0.12em] text-[11px] cursor-pointer hover:shadow-[0_0_15px_rgba(232,64,10,0.2)]"
                  >
                    <Navigation size={13} strokeWidth={2.5} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
