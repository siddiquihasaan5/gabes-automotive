import React from "react";
import { Mail, ArrowRight, MapPin, Check, ShieldCheck, Clock, ExternalLink, Wrench, Car, Shield } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";
import { useEmailModal } from "../context/EmailModalContext";
import { BUSINESS_INFO, IMAGES } from "../data/business";

export function AboutPage() {
  const { navigate } = useNavigation();
  const { openEmailModal } = useEmailModal();

  return (
    <div className="w-full">
      {/* 1. PAGE HEADER */}
      <section className="bg-[#08111A] text-white py-16 sm:py-20 border-b border-[#1E2D3D] relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              <span className="w-2 h-0.5 bg-[#F59E0B]" />
              ABOUT THE WORKSHOP
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Practical Automotive Repair in Belton, Texas
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              GABE&apos;S AUTOMOTIVE &amp; TRANSMISSION provides dedicated automotive mechanical repair and maintenance services located along US Highway 190 in Belton, Texas.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE APPROACH & WORKSHOP REALITIES */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D97706]">
                <span className="w-2 h-0.5 bg-[#D97706]" />
                OUR MECHANICAL FOCUS
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08111A] tracking-tight">
                Straightforward Mechanical Problem-Solving
              </h2>

              <p className="text-base text-[#151D24] leading-relaxed">
                Automotive repair requires a realistic assessment of mechanical wear, accurate identification of component failures, and disciplined execution. Rather than pushing unneeded add-ons or making inflated claims, GABE&apos;S AUTOMOTIVE &amp; TRANSMISSION emphasizes clear communication, sound workmanship, and honest evaluations.
              </p>

              <p className="text-base text-[#5A6B7C] leading-relaxed">
                Whether you depend on your vehicle for daily personal commuting, regional highway travel, family transport, or light utility towing, we focus on the core mechanical systems that keep it running safely and predictably.
              </p>

              {/* Service Areas Precision List */}
              <div className="bg-white border border-[#E2E8F0] p-7 space-y-4 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-[#08111A]">
                  Primary Areas of Mechanical Service
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#151D24]">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium">Transmission services &amp; mechanical repairs</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium">Engine repairs &amp; complete replacements</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium">Automotive air conditioning &amp; climate control</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium">Brake servicing, pads, rotors &amp; hydraulics</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium">Engine oil &amp; preventative filter changes</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-medium">General maintenance &amp; suspension upkeep</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:col-span-2 pt-1 border-t border-[#F1F5F9]">
                    <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="font-bold text-[#08111A]">Exclusively serving light-duty cars, SUVs, and half-ton pickup trucks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Workshop Image with Industrial Frame */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-4/3 bg-[#08111A] border border-[#CBD5E1] overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.engine}
                  alt="Mechanical technician at work with precision tools and AC diagnostic equipment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111A]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white bg-[#08111A]/90 backdrop-blur-sm p-3 border border-[#1E2D3D]">
                  <span className="font-bold text-[#F59E0B]">Diagnostic Precision:</span> Methodical inspection &amp; climate tooling
                </div>
              </div>

              {/* ASE Certified Trust Card */}
              <div className="p-5 bg-white border border-[#E2E8F0] text-xs text-[#5A6B7C] leading-relaxed shadow-xs flex items-center gap-4">
                <img
                  src={IMAGES.ase}
                  alt="ASE Certified logo"
                  className="w-14 h-14 object-contain shrink-0"
                />
                <div>
                  <span className="font-bold text-[#08111A] block">ASE Certified Standards:</span>
                  Adhering to Automotive Service Excellence benchmarks for light-duty diagnostics, transmissions, and mechanical repairs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BELTON, TEXAS LOCATION SECTION */}
      <section className="py-20 bg-white border-y border-[#E2E8F0] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D97706] mb-3">
              <span className="w-2 h-0.5 bg-[#D97706]" />
              PHYSICAL LOCATION
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08111A]">
              Convenient US Highway 190 Access
            </h2>
            <p className="text-sm sm:text-base text-[#5A6B7C] mt-2 leading-relaxed">
              Our workshop is situated on West US Highway 190 in Belton, providing straightforward access for Bell County drivers across Belton, Temple, Salado, and surrounding Central Texas communities.
            </p>
          </div>

          <div className="bg-[#F8F9FA] border border-[#E2E8F0] p-8 lg:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#08111A] flex items-center justify-center text-[#F59E0B] shrink-0 mt-1 shadow-xs">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#08111A]">
                      {BUSINESS_INFO.name}
                    </h3>
                    <address className="not-italic text-sm text-[#151D24] mt-1 space-y-0.5">
                      <p className="font-semibold">{BUSINESS_INFO.address.street}</p>
                      <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</p>
                      <p className="text-xs text-[#8E9CA8]">{BUSINESS_INFO.address.country}</p>
                    </address>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-[#5A6B7C] pt-2 border-t border-[#E2E8F0]">
                  <p>
                    <strong className="text-[#08111A]">Operating Hours:</strong> Monday–Friday, 8:00 AM–5:00 PM CT. Closed Saturday and Sunday.
                  </p>
                  <p>
                    <strong className="text-[#08111A]">Consultation Protocol:</strong> Please contact us by email in advance to confirm service scheduling and parts availability for your vehicle.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a
                    href={BUSINESS_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#08111A] hover:bg-[#162B3F] transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </a>

                  <button
                    type="button"
                    onClick={() => openEmailModal({ subject: "Shop Location & Drop-off Question - GABE'S AUTOMOTIVE" })}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#08111A] border border-[#CBD5E1] bg-white hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>Email Regarding Drop-Off</span>
                  </button>
                </div>
              </div>

              {/* Styled Direction Visual Box */}
              <div className="bg-[#08111A] text-white p-7 border border-[#1E2D3D] space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F59E0B] block">
                  Route Orientation
                </span>
                <h4 className="font-heading text-2xl font-bold text-white">
                  Finding Our Workshop
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Located directly on West US-190 with straightforward driveway access. Easy in-and-out clearance for all light-duty vehicles including full-size half-ton pickups and utility trailers.
                </p>
                <div className="p-3.5 bg-[#162B3F] border border-[#2A3F50] text-xs text-[#C0CBD4] space-y-1">
                  <p className="font-mono text-[#F59E0B]">GPS Coordinates &amp; Address:</p>
                  <p className="text-white font-medium">6971 W US Highway 190, Belton, TX 76513</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="py-20 bg-[#08111A] text-white text-center border-t border-[#1E2D3D] relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
            <span className="w-2 h-0.5 bg-[#F59E0B]" />
            TALK TO GABE&apos;S
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Have Questions About Your Light-Duty Vehicle?
          </h2>
          <p className="text-base text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Reach out by email with your vehicle year, make, model, and any mechanical issues you are encountering. We provide honest feedback and clear next steps.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openEmailModal({ subject: "General Inquiry - GABE'S AUTOMOTIVE" })}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-[#08111A] bg-gradient-to-r from-[#F59E0B] to-[#E58D05] hover:from-[#FBBF24] hover:to-[#F59E0B] transition-all cursor-pointer shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us Now</span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/services")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white border border-[#2A3F50] bg-[#0E1E2C] hover:bg-[#162B3F] transition-colors cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
