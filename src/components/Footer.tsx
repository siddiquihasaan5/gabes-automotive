import React from "react";
import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";
import { useEmailModal } from "../context/EmailModalContext";
import { BUSINESS_INFO } from "../data/business";

export function Footer() {
  const { navigate } = useNavigation();
  const { openEmailModal } = useEmailModal();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-[#050B11] border-t border-[#14202C] text-white">
      {/* Upper Footer: Main Information Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/gabes-logo.jpg"
                alt="GABE'S AUTOMOTIVE & TRANSMISSION"
                className="h-12 w-auto object-contain shrink-0 rounded-sm shadow-md"
              />
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-white block">
                  GABE&apos;S
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F59E0B] block">
                  Automotive &amp; Transmission
                </span>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed pt-1">
              Practical, dependable automotive repair and mechanical maintenance in Belton, Texas.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openEmailModal({ subject: "Footer Inquiry - GABE'S AUTOMOTIVE" })}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B] hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                <span>Direct Email Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-heading text-lg font-bold tracking-wider text-white uppercase mb-4 border-b border-[#1E2D3D] pb-2">
              Website Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLinkClick("/", e)}
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLinkClick("/services", e)}
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Services &amp; Capabilities
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick("/about", e)}
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  About the Business
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick("/contact", e)}
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  Contact &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Physical Location */}
          <div>
            <h3 className="font-heading text-lg font-bold tracking-wider text-white uppercase mb-4 border-b border-[#1E2D3D] pb-2">
              Physical Location
            </h3>
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  <span className="block font-semibold text-white">{BUSINESS_INFO.name}</span>
                  <span>{BUSINESS_INFO.address.street}</span>
                  <span className="block">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</span>
                  <span className="block text-xs text-[#64748B]">{BUSINESS_INFO.address.country}</span>
                </address>
              </div>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:text-[#FBBF24] transition-colors"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Operating Hours */}
          <div>
            <h3 className="font-heading text-lg font-bold tracking-wider text-white uppercase mb-4 border-b border-[#1E2D3D] pb-2">
              Contact &amp; Hours
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-[#8E9CA8] uppercase tracking-wider font-semibold">Direct Email</span>
                  <button
                    type="button"
                    onClick={() => openEmailModal()}
                    className="font-medium text-white hover:text-[#F59E0B] transition-colors break-all font-mono text-xs cursor-pointer text-left"
                  >
                    {BUSINESS_INFO.email}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-1" aria-hidden="true" />
                <div className="space-y-1">
                  <span className="block text-xs text-[#8E9CA8] uppercase tracking-wider font-semibold">Shop Operating Hours</span>
                  <div className="text-xs space-y-0.5">
                    <p className="text-white">Monday–Friday: <span className="text-[#94A3B8]">8:00 AM–5:00 PM</span></p>
                    <p className="text-white">Saturday–Sunday: <span className="text-[#64748B]">Closed</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Bar: Copyright & Location Tags */}
      <div className="border-t border-[#14202C] bg-[#020508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E9CA8]">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Belton, Texas 76513</span>
            <span aria-hidden="true">·</span>
            <span>Light-Duty Automotive &amp; Transmission Specialists</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
