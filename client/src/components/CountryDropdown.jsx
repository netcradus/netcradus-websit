import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COUNTRIES = [
  { id: "in", name: "India", flag: "/flags/in.svg" },
  { id: "gb", name: "United Kingdom", flag: "/flags/gb.svg" },
  { id: "us", name: "United States", flag: "/flags/us.svg" },
  { id: "au", name: "Australia", flag: "/flags/au.svg" },
  { id: "ae", name: "Dubai (UAE)", flag: "/flags/ae.svg" },
];

export default function CountryDropdown({
  value,
  onChange,
  label = "Country / Region",
  placeholder = "Select Country / Region",
  searchPlaceholder = "Find a country or region",
  required = false,
  error = null,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef(null);
  const searchInputRef = useRef(null);
  const listRef = useRef(null);

  // Filter countries based on search query
  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const selectedCountry = COUNTRIES.find((c) => c.id === value || c.name === value);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setHighlightedIndex(0);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Reset highlighted index when filter changes
  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchQuery]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredCountries.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCountries.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCountries[highlightedIndex]) {
        selectCountry(filteredCountries[highlightedIndex]);
      }
    }
  };

  const selectCountry = (country) => {
    if (onChange) {
      onChange(country.name);
    }
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full text-left font-sans select-none"
      onKeyDown={handleKeyDown}
    >
      {label && (
        <label className="block text-xs font-semibold text-[#6B7280] mb-1.5 tracking-wide uppercase">
          {label}
          {required && <span className="text-[#E8400A] ml-1">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full h-[52px] px-4 rounded-[14px] bg-[#FFFFFF] border ${
          error
            ? "border-red-500/80"
            : isOpen
            ? "border-[#E8400A] shadow-[0_0_0_3px_rgba(232,64,10,0.12)]"
            : "border-[#E7DED5] hover:border-[#D1C3B4]"
        } text-[#1F1F1F] flex items-center justify-between transition-all duration-250 ease-out outline-none cursor-pointer`}
      >
        <span className="flex items-center gap-2.5 truncate text-sm">
          {selectedCountry ? (
            <>
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="nav-country-flag"
              />
              <span className="text-[#1F1F1F] font-medium">{selectedCountry.name}</span>
            </>
          ) : (
            <span className="text-[#6B7280]">{placeholder}</span>
          )}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#6B7280] transition-transform duration-250 ease-out shrink-0 ${
            isOpen ? "rotate-180 text-[#E8400A]" : ""
          }`}
        />
      </button>

      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}

      {/* Floating Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 rounded-[12px] bg-[#FFFFFF] border border-[#E7DED5] shadow-[0_16px_36px_rgba(0,0,0,0.06)] p-2.5 overflow-hidden"
          >
            {/* Search Input Field */}
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full h-10 pl-9 pr-3.5 rounded-[8px] bg-[#F8F7F5] border border-[#E7DED5] text-xs text-[#1F1F1F] placeholder-[#6B7280] outline-none focus:border-[#E8400A] focus:ring-1 focus:ring-[#E8400A] transition-all"
              />
            </div>

            {/* Country List Options */}
            <ul
              ref={listRef}
              role="listbox"
              className="max-h-56 overflow-y-auto space-y-1 pr-1 custom-country-scrollbar"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(232,64,10,0.4) transparent",
              }}
            >
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => {
                  const isSelected =
                    selectedCountry && selectedCountry.id === country.id;
                  const isHighlighted = highlightedIndex === index;

                  return (
                    <li
                      key={country.id}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => selectCountry(country)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`h-10 px-3 rounded-[8px] flex items-center justify-between cursor-pointer text-xs transition-colors duration-150 ${
                        isSelected
                          ? "bg-[#FFF4EA]"
                          : isHighlighted
                          ? "bg-[#FFF8F2]"
                          : "bg-white"
                      } text-[#1F1F1F] ${isSelected ? "font-semibold" : ""}`}
                    >
                      <span className="flex items-center truncate" style={{ gap: '10px' }}>
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="nav-country-flag"
                        />
                        <span className="text-[#1F1F1F]">
                          {country.name}
                        </span>
                      </span>
                      {isSelected && (
                        <Check className="h-4 w-4 text-[#E8400A] shrink-0" />
                      )}
                    </li>
                  );
                })
              ) : (
                <li className="py-4 text-center text-xs text-[#6B7280]">
                  No country or region found
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
