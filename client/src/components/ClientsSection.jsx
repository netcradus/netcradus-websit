import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import client1 from "../assets/clientsList/client_1-removebg.png";
import client2 from "../assets/clientsList/client_2-removebg.png";
import client3 from "../assets/clientsList/client_3-removebg.png";
import client4 from "../assets/clientsList/client 4.png";
import client5 from "../assets/clientsList/client5.png";
import client6 from "../assets/clientsList/client_6-removebg.png";

const clients = [
  {
    id: "burgrill",
    name: "Burgrill",
    logo: client1,
    imgClass: "max-h-14 sm:max-h-18 w-auto object-contain",
  },
  {
    id: "vastralane",
    name: "Vastralane",
    logo: client2,
    needsLightBg: true,
    imgClass: "h-9 sm:h-11 w-auto object-contain scale-[1.75]",
  },
  {
    id: "cyberhaxs",
    name: "Cyberhaxs",
    logo: "/technology/cyberhaxs.png",
    imgClass: "h-20 sm:h-24 w-auto object-contain scale-[1.25] sm:scale-[1.35]",
  },
  {
    id: "westhouse",
    name: "West House",
    logo: client4,
    imgClass: "max-h-12 sm:max-h-14 max-w-[80%] w-auto object-contain",
  },
  {
    id: "himanshu",
    name: "Himanshu & Co.",
    logo: client5,
    imgClass: "max-h-12 sm:max-h-14 max-w-[88%] w-auto object-contain",
  },
  {
    id: "akt",
    name: "AKT",
    logo: client6,
    imgClass: "max-h-14 sm:max-h-18 max-w-[88%] w-auto object-contain",
  },
  {
    id: "onlinepantry",
    name: "Online Pantry",
    logo: "/technology/onlinepantry.png",
    needsLightBg: true,
    imgClass: "max-h-10 sm:max-h-12 w-auto object-contain",
  },
  {
    id: "teqnoor",
    name: "Teqnoor",
    logo: "/technology/teqnoor.png",
    needsLightBg: true,
    imgClass: "max-h-9 sm:max-h-11 w-auto object-contain",
  },
  {
    id: "oouraa",
    name: "OOURAA",
    logo: "/technology/oouraa.png",
    needsLightBg: true,
    imgClass: "max-h-10 sm:max-h-12 max-w-[85%] w-auto object-contain",
  },
];

const ClientsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.3,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="clients"
      className="trusted-leaders-section relative overflow-hidden py-20 sm:py-24 lg:py-28 bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: 'url("/assets/trusted leaders bg.png")',
        backgroundColor: '#07080c',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Two-Column Layout: Left ~60%, Right ~40% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Pill Label & Prominent Heading */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Pill Label */}
            <div className="mb-5 sm:mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-gray-300 uppercase shadow-sm">
                CUSTOMERS
              </span>
            </div>

            {/* Heading with word-by-word animation and reference line breaks */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.14] font-display"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.span variants={wordVariants} className="inline-block transform-gpu">
                Trusted
              </motion.span>{" "}
              <motion.span variants={wordVariants} className="inline-block transform-gpu">
                by
              </motion.span>{" "}
              <motion.span variants={wordVariants} className="inline-block transform-gpu">
                Industry
              </motion.span>{" "}
              <motion.span variants={wordVariants} className="inline-block transform-gpu">
                Leaders
              </motion.span>{" "}
              <br className="hidden sm:inline" />
              <motion.span variants={wordVariants} className="inline-block transform-gpu">
                Worldwide
              </motion.span>
            </motion.h2>
          </div>

          {/* Right Side: 2-Column × 3-Row Logo Grid (Matching Reference) */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 w-full">
              {clients.map((client, index) => (
                <div
                  key={client.id}
                  className={`trusted-logo-card group relative aspect-[1.32/1] rounded-2xl bg-[#0c0e14]/85 border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none shadow-lg ${
                    index === clients.length - 1 && clients.length % 2 !== 0
                      ? "col-span-2 max-w-[calc(50%-0.5rem)] mx-auto w-full"
                      : ""
                  }`}
                >
                  {/* Subtle Light/Neutral Badge for Naturally Dark Logos */}
                  {client.needsLightBg ? (
                    <div className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white/[0.94] shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`relative z-10 ${client.imgClass}`}
                      />
                    </div>
                  ) : (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`relative z-10 transition-transform duration-300 group-hover:scale-[1.03] ${client.imgClass}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
