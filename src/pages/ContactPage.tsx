import React, { useState } from "react";
import { Mail, MapPin, Clock, ExternalLink, Copy, Check, Navigation, Shield, AlertCircle } from "lucide-react";
import { useEmailModal } from "../context/EmailModalContext";
import { BUSINESS_INFO } from "../data/business";

export function ContactPage() {
  const { openEmailModal } = useEmailModal();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full">
      {/* 1. CONTACT INTRODUCTION */}
      <section className="bg-[#08111A] text-white py-16 sm:py-20 border-b border-[#1E2D3D] relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              <span className="w-2 h-0.5 bg-[#F59E0B]" />
              GET IN TOUCH
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Contact GABE&apos;S AUTOMOTIVE &amp; TRANSMISSION
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Have a vehicle repair or maintenance question? Email us with details about your vehicle and the work you need to discuss.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PRIMARY CONTACT CARDS */}
      <section className="py-20 bg-[#F8F9FA] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Email Contact (Primary Method) */}
            <div className="bg-white border-2 border-[#08111A] p-8 sm:p-9 flex flex-col justify-between shadow-lg relative">
              <div className="absolute top-0 right-0 bg-[#F59E0B] text-[#08111A] text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                Primary Channel
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#08111A] flex items-center justify-center text-[#F59E0B] shadow-sm">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D97706] block">
                    Direct Intake
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-[#08111A] mt-1">
                    Email Inquiry
                  </h2>
                </div>

                <p className="text-sm text-[#5A6B7C] leading-relaxed">
                  Send repair inquiries, vehicle symptoms, or maintenance requests directly to our shop email.
                </p>

                <div className="p-4 bg-[#F8F9FA] border border-[#E2E8F0] space-y-1.5">
                  <span className="text-[11px] text-[#8E9CA8] uppercase tracking-wider block font-bold">Shop Email Address</span>
                  <button
                    type="button"
                    onClick={() => openEmailModal()}
                    className="font-mono text-sm font-bold text-[#08111A] hover:text-[#D97706] break-all block text-left cursor-pointer"
                  >
                    {BUSINESS_INFO.email}
                  </button>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => openEmailModal({ subject: "Repair Inquiry - GABE'S AUTOMOTIVE" })}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 min-h-[48px] text-sm font-bold uppercase tracking-wider text-[#08111A] bg-gradient-to-r from-[#F59E0B] to-[#E58D05] hover:from-[#FBBF24] hover:to-[#F59E0B] transition-all shadow-sm cursor-pointer"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Email Us</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] text-xs font-bold uppercase tracking-wider text-[#08111A] border border-[#CBD5E1] bg-white hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                      <span className="text-emerald-700">Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#5A6B7C] shrink-0" aria-hidden="true" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Card 2: Physical Address & Directions */}
            <div className="bg-white border border-[#E2E8F0] p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:border-[#CBD5E1] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#08111A] flex items-center justify-center text-[#F59E0B] shadow-sm">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8E9CA8] block">
                    Belton Facility
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-[#08111A] mt-1">
                    Physical Address
                  </h2>
                </div>

                <address className="not-italic text-sm text-[#151D24] leading-relaxed space-y-1 p-4 bg-[#F8F9FA] border border-[#E2E8F0]">
                  <p className="font-bold text-[#08111A]">{BUSINESS_INFO.name}</p>
                  <p>{BUSINESS_INFO.address.street}</p>
                  <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</p>
                  <p className="text-xs text-[#8E9CA8] font-medium">{BUSINESS_INFO.address.country}</p>
                </address>

                <p className="text-xs text-[#5A6B7C] leading-relaxed">
                  Located along West US Highway 190 in Belton, TX. Easy access for Bell County drivers and regional commuters.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href={BUSINESS_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[48px] text-sm font-bold uppercase tracking-wider text-white bg-[#08111A] hover:bg-[#162B3F] transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#8E9CA8] shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Card 3: Business Hours */}
            <div className="bg-white border border-[#E2E8F0] p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:border-[#CBD5E1] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#08111A] flex items-center justify-center text-[#F59E0B] shadow-sm">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8E9CA8] block">
                    Operating Schedule
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-[#08111A] mt-1">
                    Business Hours
                  </h2>
                </div>

                <div className="p-4 bg-[#F8F9FA] border border-[#E2E8F0] space-y-3">
                  <div className="flex items-center justify-between text-sm pb-2.5 border-b border-[#E2E8F0]">
                    <span className="font-bold text-[#08111A]">Monday–Friday</span>
                    <span className="font-bold text-[#08111A] tabular-nums">8:00 AM–5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-[#8E9CA8]">
                    <span>Saturday–Sunday</span>
                    <span className="font-bold text-[#64748B] uppercase text-xs">Closed</span>
                  </div>
                </div>

                <p className="text-xs text-[#5A6B7C] leading-relaxed">
                  We are closed on weekends. Repair inquiries received outside of business hours are reviewed promptly during normal weekday operating hours.
                </p>
              </div>

              <div className="pt-6">
                <div className="p-3 bg-[#F1F5F9] border border-[#CBD5E1] text-xs text-[#5A6B7C]">
                  <span className="font-bold text-[#08111A] block">Vehicle Drop-Offs:</span>
                  Please email prior to arrival if towing an inoperable vehicle to coordinate yard space.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EMAIL INQUIRY BEST PRACTICES CHECKLIST */}
      <section className="py-20 bg-white border-y border-[#E2E8F0] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D97706]">
                <span className="w-2 h-0.5 bg-[#D97706]" />
                INTAKE CHECKLIST
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08111A] tracking-tight">
                What to Include in Your Email
              </h2>
              <p className="text-sm sm:text-base text-[#5A6B7C] leading-relaxed">
                To help us evaluate your vehicle and confirm whether the work falls within our shop capabilities, please provide the following details when emailing:
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-start gap-3.5 p-4 bg-[#F8F9FA] border border-[#E2E8F0]">
                  <span className="font-mono text-xs font-bold text-[#08111A] bg-[#FEF3C7] px-2 py-1 border border-[#FDE68A] shrink-0">01</span>
                  <div>
                    <span className="font-bold text-[#08111A] block">Vehicle Specifications</span>
                    <span className="text-xs text-[#5A6B7C]">Year, Make, Model, Engine size, and Approximate Mileage</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-[#F8F9FA] border border-[#E2E8F0]">
                  <span className="font-mono text-xs font-bold text-[#08111A] bg-[#FEF3C7] px-2 py-1 border border-[#FDE68A] shrink-0">02</span>
                  <div>
                    <span className="font-bold text-[#08111A] block">Specific Symptoms or Required Service</span>
                    <span className="text-xs text-[#5A6B7C]">e.g. Transmission slipping in 3rd gear, brake squeal under load, routine oil service, cooling issue</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-[#F8F9FA] border border-[#E2E8F0]">
                  <span className="font-mono text-xs font-bold text-[#08111A] bg-[#FEF3C7] px-2 py-1 border border-[#FDE68A] shrink-0">03</span>
                  <div>
                    <span className="font-bold text-[#08111A] block">Drivability Status</span>
                    <span className="text-xs text-[#5A6B7C]">Whether the vehicle is currently drivable or being transported via flatbed/wrecker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Email Launcher Panel */}
            <div className="lg:col-span-6">
              <div className="bg-[#08111A] text-white p-8 sm:p-10 border border-[#1E2D3D] shadow-2xl space-y-6">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    Quick Email Starters
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Select a subject line template to open your email client immediately:
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => openEmailModal({
                      subject: "General Mechanical Repair Inquiry - GABE'S AUTOMOTIVE",
                      body: "Hello Gabe's Automotive,\n\nI would like to inquire about general mechanical repairs:\nVehicle (Year, Make, Model):\n\nSymptoms or repairs needed:\n\nThank you,"
                    })}
                    className="w-full flex items-center justify-between p-4 bg-[#0E1E2C] hover:bg-[#162B3F] border border-[#1E2D3D] hover:border-[#F59E0B] text-xs font-semibold text-white transition-all group cursor-pointer text-left"
                  >
                    <span>General Mechanical Repair Inquiry</span>
                    <Mail className="w-4 h-4 text-[#F59E0B] group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openEmailModal({
                      subject: "Transmission Maintenance / Repair Inquiry - GABE'S AUTOMOTIVE",
                      body: "Hello Gabe's Automotive,\n\nI would like to discuss transmission maintenance or repair:\nVehicle (Year, Make, Model):\n\nTransmission symptoms (slipping, shifting hesitation, fluid leak):\n\nThank you,"
                    })}
                    className="w-full flex items-center justify-between p-4 bg-[#0E1E2C] hover:bg-[#162B3F] border border-[#1E2D3D] hover:border-[#F59E0B] text-xs font-semibold text-white transition-all group cursor-pointer text-left"
                  >
                    <span>Transmission Maintenance / Repair Inquiry</span>
                    <Mail className="w-4 h-4 text-[#F59E0B] group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openEmailModal({
                      subject: "Engine Service or Replacement Inquiry - GABE'S AUTOMOTIVE",
                      body: "Hello Gabe's Automotive,\n\nI would like to inquire regarding engine repair or replacement:\nVehicle (Year, Make, Model):\n\nMechanical issues:\n\nThank you,"
                    })}
                    className="w-full flex items-center justify-between p-4 bg-[#0E1E2C] hover:bg-[#162B3F] border border-[#1E2D3D] hover:border-[#F59E0B] text-xs font-semibold text-white transition-all group cursor-pointer text-left"
                  >
                    <span>Engine Repair / Replacement Inquiry</span>
                    <Mail className="w-4 h-4 text-[#F59E0B] group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openEmailModal({
                      subject: "Air Conditioning (A/C) Service Inquiry - GABE'S AUTOMOTIVE",
                      body: "Hello Gabe's Automotive,\n\nI would like to inquire regarding light-duty air conditioning repair or recharge:\nVehicle (Year, Make, Model):\n\nSymptoms (blowing warm air, strange noise, weak airflow):\n\nThank you,"
                    })}
                    className="w-full flex items-center justify-between p-4 bg-[#0E1E2C] hover:bg-[#162B3F] border border-[#1E2D3D] hover:border-[#F59E0B] text-xs font-semibold text-white transition-all group cursor-pointer text-left"
                  >
                    <span>Air Conditioning (A/C) Service Inquiry</span>
                    <Mail className="w-4 h-4 text-[#F59E0B] group-hover:scale-110 transition-transform shrink-0" aria-hidden="true" />
                  </button>
                </div>

                <div className="pt-2 text-xs text-[#8E9CA8] border-t border-[#1E2D3D]">
                  Clicking any button opens your local or web email client directly addressed to <span className="text-[#F59E0B] font-mono">{BUSINESS_INFO.email}</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOCATION & DIRECTIONS SECTION */}
      <section className="py-20 bg-[#F8F9FA] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D97706] mb-3">
              <span className="w-2 h-0.5 bg-[#D97706]" />
              MAP &amp; DIRECTIONS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08111A]">
              Finding the Shop in Belton, Texas
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B7C] mt-2 leading-relaxed">
              6971 W US Highway 190, Belton, TX 76513. Use the verified Google Maps link below for accurate turn-by-turn navigation.
            </p>
          </div>

          <div className="bg-white border border-[#E2E8F0] p-8 lg:p-12 shadow-md space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706]">
                  <Navigation className="w-4 h-4" aria-hidden="true" />
                  <span>Turn-by-turn Navigation</span>
                </div>
                <h3 className="font-heading text-3xl font-bold text-[#08111A]">
                  Google Maps Directions Link
                </h3>
                <p className="text-sm text-[#5A6B7C] leading-relaxed">
                  Open our verified address directly in Google Maps for live GPS routing from your current location, real-time traffic updates, and highway exit directions.
                </p>
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-4 min-h-[48px] text-sm font-bold uppercase tracking-wider text-white bg-[#08111A] hover:bg-[#162B3F] transition-colors shadow-sm"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#F8F9FA] p-6 border border-[#E2E8F0] space-y-3">
                <h4 className="font-heading text-xl font-bold text-[#08111A] uppercase tracking-wider">
                  Location Summary
                </h4>
                <div className="text-xs space-y-1.5 text-[#151D24]">
                  <p className="font-bold text-[#08111A]">{BUSINESS_INFO.name}</p>
                  <p>{BUSINESS_INFO.address.street}</p>
                  <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</p>
                  <p className="text-[#8E9CA8]">{BUSINESS_INFO.address.country}</p>
                </div>
                <div className="pt-2 border-t border-[#E2E8F0] text-[11px] text-[#5A6B7C]">
                  Highway frontage corridor · Belton, Bell County, TX
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
