import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Share2, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const FloatingContact = () => {
  const contacts = [
    {
      icon: <Instagram size={18} />,
      href: "https://instagram.com/netcradus",
      label: "Instagram",
      bgColor: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
    },
    {
      icon: <Facebook size={18} />,
      href: "https://www.facebook.com/netcradus",
      label: "Facebook",
      bgColor: "bg-[#1877F2]"
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/company/netcradus-pvt-ltd/",
      label: "LinkedIn",
      bgColor: "bg-[#0A66C2]"
    },
    {
      icon: <Youtube size={18} />,
      href: "https://www.youtube.com/@Netcradus-acis",
      label: "YouTube",
      bgColor: "bg-[#FF0000]"
    }
  ];

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setIsScrolling(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: isScrolling ? 45 : 0,
        opacity: isScrolling ? 0.6 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="fixed right-1 xs:right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none scale-75 xs:scale-85 sm:scale-100 origin-right max-w-[calc(100vw-8px)]"
    >
      {/* Top Share Button */}
      <a
        href="#share"
        onClick={(e) => {
          e.preventDefault();
          if (navigator.share) {
            navigator.share({
              title: 'Netcradus',
              url: window.location.href,
            }).catch(() => {});
          }
        }}
        className="pointer-events-auto w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8C42] flex flex-col items-center justify-center text-white shadow-lg hover:scale-105 transition-all no-underline"
        title="Share"
      >
        <Share2 size={16} />
        <span className="text-[9px] font-extrabold uppercase tracking-tight leading-none mt-0.5">Share</span>
      </a>

      {/* Social Icons Enclosure with Orange Border */}
      <div className="pointer-events-auto flex flex-col gap-2.5 p-1.5 rounded-full border border-[#FF6B00] bg-[#050B14]/80 backdrop-blur-md shadow-2xl">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md ${contact.bgColor} hover:shadow-lg transition-transform`}
            title={contact.label}
          >
            {contact.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingContact;

