import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Phone } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import SolutionsMegaMenu, { SOLUTIONS } from './SolutionsMegaMenu';
import ProductMegaMenu, { PRODUCTS } from './ProductMegaMenu';
import PlatformMegaMenu, { PLATFORM_ITEMS } from './PlatformMegaMenu';
import './Navbar.css';

const NAVBAR_COUNTRIES = [
  { id: "in", name: "India", flag: "/flags/in.svg" },
  { id: "gb", name: "United Kingdom", flag: "/flags/gb.svg", url: "https://www.netcradus.co.uk/" },
  { id: "us", name: "United States", flag: "/flags/us.svg", url: "https://us.netcradus.com/" },
  { id: "au", name: "Australia", flag: "/flags/au.svg", url: "https://aus.netcradus.com/" },
];

function NavbarCountryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(NAVBAR_COUNTRIES[0]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  const filteredCountries = NAVBAR_COUNTRIES.filter((c) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      c.name.toLowerCase().includes(query) ||
      c.id.toLowerCase() === query ||
      (c.id === "us" && (query === "us" || query === "usa" || query === "america")) ||
      (c.id === "gb" && (query === "uk" || query === "gb" || query === "britain" || query === "england"))
    );
  });

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    if (country.url) {
      window.location.href = country.url;
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setHighlightedIndex(0);
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchQuery]);

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
        handleSelectCountry(filteredCountries[highlightedIndex]);
      }
    }
  };

  return (
    <div ref={containerRef} className="relative nav-country-selector-wrapper" onKeyDown={handleKeyDown}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select Country or Region"
        className="nav-country-btn"
      >
        <span className="flex items-center truncate" style={{ gap: '10px' }}>
          <img
            src={selectedCountry ? selectedCountry.flag : NAVBAR_COUNTRIES[0].flag}
            alt={selectedCountry ? selectedCountry.name : NAVBAR_COUNTRIES[0].name}
            className="nav-country-flag"
          />
          <span className="nav-country-name">{selectedCountry ? selectedCountry.name : NAVBAR_COUNTRIES[0].name}</span>
        </span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-250 shrink-0 ${isOpen ? "rotate-180 text-[#FF6A00]" : "text-white/70"
            }`}
        />
      </button>

      {isOpen && (
        <div className="nav-country-dropdown-panel" role="listbox">
          <div className="p-2 border-b border-white/10">
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find a country or region"
              aria-label="Find a country or region"
              className="nav-country-search-input"
            />
          </div>
          <ul className="max-h-48 overflow-y-auto p-1 custom-country-scrollbar">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => {
                const isSelected = selectedCountry?.id === country.id;
                const isHighlighted = highlightedIndex === index;

                return (
                  <li
                    key={country.id}
                    role="option"
                    aria-selected={isSelected}
                    aria-label={country.name}
                    tabIndex={0}
                    onClick={() => handleSelectCountry(country)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSelectCountry(country);
                      }
                    }}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={`nav-country-option ${isSelected ? "selected" : ""
                      } ${isHighlighted ? "highlighted" : ""}`}
                  >
                    <span className="flex items-center" style={{ gap: '10px' }}>
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="nav-country-flag"
                      />
                      <span>{country.name}</span>
                    </span>
                    {isSelected && (
                      <span className="text-[#FF6A00] font-bold">✓</span>
                    )}
                  </li>
                );
              })
            ) : (
              <li className="p-3 text-center text-xs text-[#A1A1AA]">
                No country found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

const Navbar = () => {
  useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'platform' | 'solutions' | 'products' | null
  const [isMobilePlatformOpen, setIsMobilePlatformOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const closeTimeoutRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setActiveMenu(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (menuName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleMenuToggle = (menuName, e) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <div className="header-wrapper">
      <header ref={navRef} className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
        <div className="navbar-container">

          <Link to="/" className="nav-logo-link">
            <img
              src="/netcradus-logo.png"
              alt="Netcradus"
              className="logo-image"
              width="125"
              height="16"
            />
          </Link>

          <nav className="desktop-nav">
            <div
              className={`nav-item-platform relative ${activeMenu === 'platform' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('platform')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/platform"
                className={`nav-link cursor-pointer bg-transparent border-none p-0 outline-none ${isActiveLink('/platform') || activeMenu === 'platform'
                    ? 'active'
                    : ''
                  }`}
              >
                Platform
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${activeMenu === 'platform'
                      ? 'rotate-180 text-[#FF6B00]'
                      : isActiveLink('/platform')
                        ? 'text-[#FF6B00]'
                        : 'text-white/70'
                    }`}
                />
              </Link>

              <PlatformMegaMenu
                isOpen={activeMenu === 'platform'}
                isScrolled={isScrolled}
                onClose={() => setActiveMenu(null)}
                onMouseEnter={() => handleMouseEnter('platform')}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            <div
              className={`nav-item-solutions relative ${activeMenu === 'solutions' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => handleMenuToggle('solutions', e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleMenuToggle('solutions', e);
                  }
                }}
                aria-expanded={activeMenu === 'solutions'}
                aria-haspopup="true"
                className={`nav-link cursor-pointer bg-transparent border-none p-0 outline-none ${isActiveLink('/services') || SOLUTIONS.some((s) => isActiveLink(s.path)) || activeMenu === 'solutions'
                    ? 'active'
                    : ''
                  }`}
              >
                Solutions
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${activeMenu === 'solutions'
                      ? 'rotate-180 text-[#FF6B00]'
                      : (isActiveLink('/services') || SOLUTIONS.some((s) => isActiveLink(s.path)))
                        ? 'text-[#FF6B00]'
                        : 'text-white/70'
                    }`}
                />
              </button>

              <SolutionsMegaMenu
                isOpen={activeMenu === 'solutions'}
                isScrolled={isScrolled}
                onClose={() => setActiveMenu(null)}
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            <div
              className={`nav-item-products relative ${activeMenu === 'products' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={(e) => handleMenuToggle('products', e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleMenuToggle('products', e);
                  }
                }}
                aria-expanded={activeMenu === 'products'}
                aria-haspopup="true"
                className={`nav-link cursor-pointer bg-transparent border-none p-0 outline-none ${PRODUCTS.some((p) => isActiveLink(p.path)) || activeMenu === 'products'
                    ? 'active'
                    : ''
                  }`}
              >
                Products
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${activeMenu === 'products'
                      ? 'rotate-180 text-[#FF6B00]'
                      : PRODUCTS.some((p) => isActiveLink(p.path))
                        ? 'text-[#FF6B00]'
                        : 'text-white/70'
                    }`}
                />
              </button>

              <ProductMegaMenu
                isOpen={activeMenu === 'products'}
                isScrolled={isScrolled}
                onClose={() => setActiveMenu(null)}
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              />
            </div>

            <Link
              to="/why-netcradus"
              className={`nav-link ${isActiveLink('/why-netcradus') ? 'active' : ''}`}
            >
              Why Netcradus
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          <div className="navbar-actions">
            <a
              href="tel:1800121008800"
              className="hidden lg:inline-flex nav-phone-btn shrink-0 group"
            >
              <Phone size={15} className="shrink-0 phone-icon group-hover:text-white transition-colors duration-300" />
              <span>1800 121 008800</span>
            </a>

            <div className="hidden lg:block">
              <NavbarCountryDropdown />
            </div>

            <button
              className="lg:hidden mobile-hamburger-btn"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="mobile-drawer-backdrop"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation Menu">
          <div className="mobile-header">
            <Link to="/" className="mobile-drawer-logo" onClick={() => setIsMenuOpen(false)}>
              <img src="/netcradus-logo.png" alt="Netcradus" className="logo-image-drawer" width="115" height="15" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mobile-close"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-links">
            <button
              type="button"
              className={`mobile-solutions-toggle ${isMobilePlatformOpen ? 'open' : ''}`}
              onClick={() => setIsMobilePlatformOpen((prev) => !prev)}
            >
              Platform
              <ChevronRight size={18} />
            </button>

            <div className={`mobile-solutions-list ${isMobilePlatformOpen ? 'open' : ''}`}>
              {PLATFORM_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="mobile-solution-link"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMobilePlatformOpen(false);
                  }}
                >
                  <span className="mobile-solution-name">{item.name}</span>
                  <span className="mobile-solution-desc">→ {item.subtitle}</span>
                </Link>
              ))}
            </div>

            <button
              type="button"
              className={`mobile-solutions-toggle ${isMobileSolutionsOpen ? 'open' : ''}`}
              onClick={() => setIsMobileSolutionsOpen((prev) => !prev)}
            >
              Solutions
              <ChevronRight size={18} />
            </button>

            <div className={`mobile-solutions-list ${isMobileSolutionsOpen ? 'open' : ''}`}>
              {SOLUTIONS.map((solution) => (
                <Link
                  key={solution.id}
                  to={solution.path}
                  className="mobile-solution-link"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMobileSolutionsOpen(false);
                  }}
                >
                  <span className="mobile-solution-name">{solution.name}</span>
                  <span className="mobile-solution-desc">{solution.description}</span>
                </Link>
              ))}
            </div>

            <button
              type="button"
              className={`mobile-products-toggle ${isMobileProductsOpen ? 'open' : ''}`}
              onClick={() => setIsMobileProductsOpen((prev) => !prev)}
            >
              Products
              <ChevronRight size={18} />
            </button>

            <div className={`mobile-products-list ${isMobileProductsOpen ? 'open' : ''}`}>
              {PRODUCTS.map((product) => (
                <Link
                  key={product.id}
                  to={product.path}
                  className="mobile-product-link"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMobileProductsOpen(false);
                  }}
                >
                  <span className="mobile-product-name">{product.name}</span>
                  <span className="mobile-product-desc">{product.description}</span>
                </Link>
              ))}
            </div>

            <Link
              to="/why-netcradus"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Netcradus
              <ChevronRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <ChevronRight size={18} />
            </Link>

            <div className="mobile-drawer-cta-wrapper space-y-3">
              <div className="w-full flex justify-start pt-2 pb-1">
                <NavbarCountryDropdown />
              </div>
              <a
                href="tel:1800121008800"
                className="mobile-drawer-call-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} className="shrink-0 text-[#FF6A00]" />
                <span className="truncate">Call Us: 1800 121 008800</span>
              </a>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;