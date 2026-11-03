import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, MapPin, Mail, Clock } from 'lucide-react';

export default function JobApplyModal({ job, isOpen, onClose }) {
  if (!isOpen || !job) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[#E9EDF2] bg-[#FFFFFF] p-8 text-center text-[#101828] shadow-2xl"
        >
          {/* Close Button (X) */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#FAFAFA] border border-[#E9EDF2] text-[#667085] hover:text-[#101828] hover:bg-[#EEF2F6] transition-all"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Centered Briefcase Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF4EC] border border-[#FF6B00]/30 text-[#FF6B00] shadow-sm">
            <Briefcase size={30} />
          </div>

          {/* Department Badge */}
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#FFF4EC] border border-[#FF6B00]/30 text-[#FF6B00] text-[11px] font-extrabold uppercase tracking-widest mb-3">
            {job.department}
          </div>

          {/* Job Title */}
          <h2 className="text-2xl sm:text-3xl font-black text-[#101828] leading-tight mb-6">
            {job.title}
          </h2>

          {/* Information Card */}
          <div className="mb-8 rounded-2xl bg-[#FFF8F3] border border-[#FF6B00]/20 p-5 text-left space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#FF6B00]/10 pb-3">
              <span className="flex items-center gap-2 text-sm font-bold text-[#101828]">
                <Clock size={16} className="text-[#FF6B00]" /> Work Type
              </span>
              <span className="text-sm font-semibold text-[#667085]">Full Time</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#FF6B00]/10 pb-3">
              <span className="flex items-center gap-2 text-sm font-bold text-[#101828]">
                <MapPin size={16} className="text-[#FF6B00]" /> Location
              </span>
              <span className="text-sm font-semibold text-[#667085]">Onsite</span>
            </div>

            <div className="pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-[#98A2B3] mb-1.5">Contact</div>
              <a
                href="mailto:hr@netcradus.com"
                className="inline-flex items-center gap-2 text-base font-bold text-[#FF6B00] hover:text-[#E85D00] transition-colors"
              >
                <Mail size={18} />
                <span>hr@netcradus.com</span>
              </a>
            </div>
          </div>

          {/* Single Close Button */}
          <button
            onClick={onClose}
            className="btn-orange-gradient w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all"
          >
            Close
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
