import React, { useState, useEffect } from "react";
import { Mail, Menu, X, MapPin, Clock, ArrowRight } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";
import { useEmailModal } from "../context/EmailModalContext";
import { BUSINESS_INFO } from "../data/business";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const { currentPath, navigate } = useNavigation();
  const { openEmailModal } = useEmailModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  // Check if currently open in Belton, TX (Central Time, Mon-Fri 8:00 - 17:00)
  useEffect(() => {
    try {
      const now = new Date();
      // Format to America/Chicago
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Chicago",
        hour: "numeric",
        hour12: false,
        weekday: "short",
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const parts = formatter.formatToParts(now);
      const weekday = parts.find(p => p.type === "weekday")?.value;
      const hour = parseInt(parts.find(p => p.type === "hour")?.value || "0", 10);
      
      const isWeekday = weekday && !["Sat", "Sun"].includes(weekday);
      const isWorkHours = hour >= 8 && hour < 17;
      setIsOpenNow(Boolean(isWeekday && isWorkHours));
    } catch {
      setIsOpenNow(false);
    }
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#08111A] text-white border-b border-[#1E2D3D] shadow-md">
      {/* Top Utility Bar */}
      <div className="bg-[#050B11] border-b border-[#14202C] text-xs text-[#8E9CA8] py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-[#C0CBD4]">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" aria-hidden="true" />
              <span>6971 W US Highway 190, Belton, TX 76513</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" aria-hidden="true" />
              <span>Mon–Fri: 8:00 AM–5:00 PM CT</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[11px]">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-[#64748B]"}`} />
              <span className={isOpenNow ? "text-emerald-400 font-medium" : "text-[#94A3B8]"}>
                {isOpenNow ? "Shop Open Today" : "Closed Now · Reopens 8:00 AM Mon–Fri"}
              </span>
            </span>
            <span className="text-[#334155]">|</span>
            <button
              type="button"
              onClick={() => openEmailModal()}
              className="text-[#F59E0B] hover:text-[#FBBF24] transition-colors font-medium flex items-center gap-1 cursor-pointer"
            >
              <span>{BUSINESS_INFO.email}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Clearly Visible Brand Logo with Zero Accompanying Text (as client requested) */}
          <a
            href="/"
            onClick={(e) => handleNavClick("/", e)}
            className="flex items-center group shrink-0 focus:outline-none py-1"
            aria-label="GABE'S AUTOMOTIVE & TRANSMISSION Home"
          >
            <img
              src="/images/gabes-logo.jpg"
              alt="GABE'S AUTOMOTIVE & TRANSMISSION"
              className="h-14 sm:h-16 w-auto max-w-[180px] object-contain rounded-sm shadow-md group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.35)] transition-all duration-300"
            />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(item.path, e)}
                  className={`relative py-2 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action (Desktop) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => openEmailModal({ subject: "Repair & Maintenance Inquiry - GABE'S AUTOMOTIVE" })}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 min-h-[44px] text-sm font-bold uppercase tracking-wider text-[#08111A] bg-gradient-to-r from-[#F59E0B] to-[#E58D05] hover:from-[#FBBF24] hover:to-[#F59E0B] active:from-[#D97706] active:to-[#B45309] transition-all whitespace-nowrap shadow-[0_2px_12px_rgba(245,158,11,0.25)] hover:shadow-[0_4px_16px_rgba(245,158,11,0.35)] cursor-pointer"
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Email Us</span>
            </button>
          </div>

          {/* Mobile Menu & Quick Email Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => openEmailModal({ subject: "Mobile Repair Inquiry - GABE'S AUTOMOTIVE" })}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#08111A] bg-[#F59E0B] hover:bg-[#FBBF24] transition-colors cursor-pointer"
              aria-label="Email GABE'S AUTOMOTIVE & TRANSMISSION"
            >
              <Mail className="w-5 h-5 shrink-0" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:text-[#F59E0B] bg-[#162B3F] transition-colors border border-[#1E2D3D]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08111A] border-b border-[#1E2D3D] px-4 pt-3 pb-6 space-y-3">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(item.path, e)}
                  className={`flex items-center justify-between px-4 py-3 min-h-[44px] text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#162B3F] text-white border-l-2 border-[#F59E0B]"
                      : "text-[#94A3B8] hover:bg-[#0F1E2E] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs uppercase tracking-wider text-[#F59E0B] font-bold">
                      Current
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#1E2D3D] px-2 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openEmailModal({ subject: "Repair Inquiry - GABE'S AUTOMOTIVE" });
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 min-h-[44px] text-center font-bold uppercase tracking-wider text-[#08111A] bg-gradient-to-r from-[#F59E0B] to-[#E58D05] text-base cursor-pointer"
            >
              <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Email Us</span>
            </button>
            <div className="text-xs text-[#8E9CA8] text-center space-y-1">
              <p className="text-white font-medium">6971 W US Highway 190, Belton, TX</p>
              <p>Monday–Friday: 8:00 AM–5:00 PM CT</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
