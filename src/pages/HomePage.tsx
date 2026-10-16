import React from "react";
import { Mail, ArrowRight, Wrench, Cog, ShieldCheck, Fuel, Layers, CheckCircle2, Clock, MapPin, Car, Wind, Gauge } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";
import { useEmailModal } from "../context/EmailModalContext";
import { SERVICES, IMAGES } from "../data/business";

export function HomePage() {
  const { navigate } = useNavigation();
  const { openEmailModal } = useEmailModal();

  return (
    <div className="min-h-screen bg-[#08111A] text-white selection:bg-[#F59E0B] selection:text-[#08111A]">
      {/* 1. HERO SECTION — LIGHT-DUTY AUTOMOTIVE & TRANSMISSION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#1E2D3D]">
        {/* Background Subtle Precision Grid */}
        <div className="absolute inset-0 bg-dark-grid opacity-35 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7">
              {/* Specialized Scope Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#162B3F] border border-[#2A3F50] text-xs font-mono uppercase tracking-wider text-[#F59E0B]">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                <span>EXCLUSIVELY LIGHT-DUTY AUTOMOTIVE &amp; TRANSMISSION REPAIR</span>
              </div>

              {/* Main Headline (Title Case, All White, Matching Attached Reference) */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Automotive Repair for the Jobs <br />
                That Keep You Moving.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
                From transmission and engine work to brake service, oil changes, and general maintenance, GABE&apos;S AUTOMOTIVE &amp; TRANSMISSION serves vehicle owners in Belton, Texas.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openEmailModal({
                    subject: "General Automotive Service Inquiry - GABE'S AUTOMOTIVE",
                    body: "Hello Gabe's Automotive,\n\nI would like to inquire about light-duty service for my vehicle:\nYear / Make / Model / Mileage:\n\nScope of work or issues noticed:\n\nThank you,"
                  })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[50px] text-base font-bold uppercase tracking-wider text-[#08111A] bg-gradient-to-r from-[#F59E0B] to-[#E58D05] hover:from-[#FBBF24] hover:to-[#D97706] transition-all transform active:scale-[0.98] cursor-pointer shadow-lg shadow-[#F59E0B]/20"
                >
                  <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Send Direct Email</span>
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/services")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 min-h-[50px] text-base font-medium text-white border border-[#2A3F50] bg-[#0E1E2C] hover:bg-[#162B3F] hover:border-[#4B6B8A] transition-colors whitespace-nowrap text-center cursor-pointer shadow-sm"
                >
                  <span>View Our Services</span>
                  <ArrowRight className="w-4 h-4 shrink-0 text-[#F59E0B]" aria-hidden="true" />
                </button>
              </div>

              {/* Quick Verification Strip */}
              <div className="pt-6 border-t border-[#1E2D3D] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#8E9CA8]">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                  <span className="text-[#C0CBD4]">6971 W US Highway 190, Belton, TX</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                  <span className="text-[#C0CBD4]">Monday–Friday: 8:00 AM–5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Right Image Column with Precision Border & Corner Accents */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full bg-[#08111A] overflow-hidden border border-[#2A3F50] shadow-2xl">
                <img
                  src={IMAGES.hero}
                  alt="Automotive technician performing precision under-hood engine diagnostics and A/C climate service in Belton workshop"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111A]/80 via-transparent to-transparent pointer-events-none" />

                {/* Corner Industrial Bracket Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#F59E0B] pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#F59E0B] pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#F59E0B] pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#F59E0B] pointer-events-none" />

                {/* Image Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 text-xs bg-[#08111A]/90 backdrop-blur-md px-3.5 py-2.5 border border-[#1E2D3D] flex items-center justify-between">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    Engine &amp; A/C Climate Diagnostics Bay
                  </span>
                  <span className="text-[#94A3B8] font-mono text-[11px]">US-190 Belton, TX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Feature Anchor Strip */}
        <div className="bg-[#050B11] border-t border-[#14202C] py-5 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="flex items-center gap-2.5 text-[#C0CBD4]">
                <Cog className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Transmission Overhauls</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#C0CBD4]">
                <Wrench className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Engine Repairs &amp; Replacements</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#C0CBD4]">
                <Wind className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Air Conditioning Diagnostics</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#C0CBD4]">
                <Car className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Exclusively Light-Duty Vehicles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SNAPSHOT — 6 VERIFIED SERVICES */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D97706] mb-3">
                <span className="w-2 h-0.5 bg-[#D97706]" />
                PRACTICAL MECHANICAL REPAIR
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08111A]">
                Our Mechanical Services
              </h2>
              <p className="mt-3 text-base text-[#5A6B7C] leading-relaxed">
                Core light-duty automotive repairs executed with methodical diagnostic testing, quality components, and direct email communication.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigate("/services")}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#08111A] hover:text-[#D97706] transition-colors cursor-pointer shrink-0 pb-1 border-b-2 border-[#08111A] hover:border-[#D97706]"
            >
              <span>Explore All 6 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const icons = [Cog, Wrench, Wind, ShieldCheck, Fuel, Layers];
              const IconComp = icons[index % icons.length];

              return (
                <div
                  key={service.id}
                  className="group bg-white border border-[#E2E8F0] hover:border-[#F59E0B] p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-lg relative"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F59E0B] transition-colors" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-[#08111A] flex items-center justify-center text-[#F59E0B] shadow-sm">
                        <IconComp className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#8E9CA8] bg-[#F1F5F9] px-2.5 py-1">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-[#08111A] tracking-tight pt-1">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#5A6B7C] leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#F1F5F9] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => navigate("/services")}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#08111A] group-hover:text-[#D97706] transition-colors cursor-pointer"
                    >
                      <span>Read Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => openEmailModal({
                        subject: `Inquiry regarding ${service.title} - GABE'S AUTOMOTIVE`,
                        serviceTitle: service.title
                      })}
                      className="text-xs font-semibold text-[#8E9CA8] hover:text-[#08111A] transition-colors cursor-pointer"
                    >
                      Email Us
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SUPPORTED VEHICLE RANGES — EXCLUSIVELY LIGHT-DUTY SPECIALIZATION (REDESIGNED TO MATCH REFERENCE IMAGE) */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#E2E8F0] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D97706] mb-3">
              <span className="w-2 h-0.5 bg-[#D97706]" />
              EXCLUSIVELY LIGHT-DUTY VEHICLES (UNDER 8,500 LBS GVWR)
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08111A]">
              Supported Vehicle Ranges: Light-Duty Vehicles
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#5A6B7C] leading-relaxed">
              At Gabe&apos;s Automotive &amp; Transmission, we specialize exclusively in light-duty passenger vehicles, compact &amp; midsize cars, sport utilities, and half-ton pickup trucks. Our shop tooling and hydraulic lifts are calibrated specifically for this vehicle class.
            </p>
          </div>

          {/* FEATURED WORKSHOP SHOWCASE (Directly matching the third attached reference image) */}
          <div className="bg-[#08111A] text-white border border-[#1E2D3D] shadow-2xl mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Third Image - Precision Under-Hood Engine & A/C Diagnostics */}
              <div className="lg:col-span-7 relative group">
                <div className="relative aspect-16/10 lg:h-full w-full bg-[#050B11] overflow-hidden">
                  <img
                    src={IMAGES.engine}
                    alt="Automotive technician performing precision under-hood engine diagnostics and A/C climate service with Robinair R-1234yf machine and dual manifold gauges"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08111A]/90 via-[#08111A]/20 to-transparent pointer-events-none" />

                  {/* Top Location Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 bg-[#08111A]/85 backdrop-blur-md border border-[#2A3F50] text-[11px] font-mono text-[#F59E0B]">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                    <span>BELTON, TX ADVANCED CLIMATE &amp; ENGINE FACILITY</span>
                  </div>

                  {/* Overlaid Reference Image Callouts (Matching Third Attached Photo) */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row gap-2.5">
                    <div className="flex-1 bg-[#08111A]/90 backdrop-blur-md border border-[#1E2D3D] p-3 text-xs">
                      <div className="flex items-center gap-1.5 text-[#F59E0B] font-bold text-[11px] uppercase tracking-wider mb-0.5">
                        <Wind className="w-3.5 h-3.5" />
                        <span>Robinair R-1234yf &amp; R-134a Station</span>
                      </div>
                      <p className="text-[#C0CBD4] text-[11px] leading-tight">
                        Automated refrigerant recovery, deep vacuum decay testing &amp; digital weight recharge.
                      </p>
                    </div>

                    <div className="flex-1 bg-[#08111A]/90 backdrop-blur-md border border-[#1E2D3D] p-3 text-xs">
                      <div className="flex items-center gap-1.5 text-[#F59E0B] font-bold text-[11px] uppercase tracking-wider mb-0.5">
                        <Gauge className="w-3.5 h-3.5" />
                        <span>Dual-Manifold Diagnostics</span>
                      </div>
                      <p className="text-[#C0CBD4] text-[11px] leading-tight">
                        Real-time high &amp; low pressure gauge analysis for compressor, expansion valve &amp; cooling loops.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Brief, Informative Description of Light-Duty Services */}
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F59E0B] mb-2">
                    <Car className="w-4 h-4" />
                    <span>CLASS 1 &amp; 2A CAPABILITIES</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    What We Service in Our Light-Duty Bays
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mt-2">
                    Light-duty vehicles represent everyday personal, commuter, and family transport. Our facility is strictly engineered for consumer automobiles up to 8,500 lbs GVWR:
                  </p>
                </div>

                {/* Scannable service highlights */}
                <div className="space-y-3.5 border-y border-[#1E2D3D] py-5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-[#162B3F] text-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Air Conditioning (A/C) Diagnostics &amp; Recharges</h4>
                      <p className="text-xs text-[#94A3B8]">
                        R-134a and modern R-1234yf leak testing, compressor and condenser replacements, and dual-zone climate system recharges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-[#162B3F] text-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Engine Repairs &amp; Replacements</h4>
                      <p className="text-xs text-[#94A3B8]">
                        Check engine diagnostics, timing chain/belt replacements, cylinder head work, cooling systems, water pumps, and turnkey crate engine installations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-[#162B3F] text-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Transmission Overhauls &amp; Flushes</h4>
                      <p className="text-xs text-[#94A3B8]">
                        Fluid servicing, valve body diagnostics, shift solenoids, torque converters, and complete rebuilds for automatic, manual, and CVT light-duty drivetrains.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded bg-[#162B3F] text-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">General Maintenance &amp; Brake Services</h4>
                      <p className="text-xs text-[#94A3B8]">
                        Ceramic pads, rotor resurfacing, struts, shocks, control arms, full synthetic oil changes, and preventative multi-point safety inspections.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openEmailModal({
                      subject: "Light-Duty Vehicle Repair Inquiry - GABE'S AUTOMOTIVE",
                      body: "Hello Gabe's Automotive,\n\nI would like an estimate for light-duty service:\nVehicle (Year, Make, Model, Mileage):\n\nIssues noticed or requested repairs:\n\nThank you,"
                    })}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#08111A] bg-[#F59E0B] hover:bg-[#FBBF24] transition-all cursor-pointer shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Inquire for Light-Duty Service</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Qualified Scope Assurance Strip */}
          <div className="p-6 bg-[#08111A] text-white border border-[#1E2D3D] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-6 h-6 text-[#F59E0B] shrink-0 mt-1" />
              <div>
                <span className="font-bold text-white text-base block">Why We Exclusively Service Light-Duty Vehicles</span>
                <span className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed block mt-1">
                  By strictly excluding medium and heavy commercial trucks, our shop bays remain clean, scheduling is dependable, and our hydraulic lifts and diagnostic equipment are never bottlenecked by heavy commercial repairs.
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => openEmailModal({ subject: "Light-Duty Vehicle Inquiry - GABE'S AUTOMOTIVE" })}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#08111A] bg-[#F59E0B] hover:bg-[#FBBF24] whitespace-nowrap cursor-pointer shrink-0 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Our Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. WORKSHOP ENVIRONMENT & ASE CERTIFIED SECTION */}
      <section className="py-20 lg:py-28 bg-[#08111A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-3">
                <span className="w-2 h-0.5 bg-[#F59E0B]" />
                WORKSHOP ENVIRONMENT &amp; STANDARDS
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Mechanical Precision &amp; Honest Diagnosis
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Automotive mechanics demand patience, the correct tooling, and methodical problem-solving. We approach every light-duty repair with ASE certified standards, straightforward communication, and practical mechanical competence.
              </p>
            </div>
          </div>

          {/* Two-column showcase: Engine & AC diagnostics + ASE Certified Emblem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Precision Engine & AC Diagnostics Image */}
            <div className="group relative bg-[#0F1E2E] border border-[#1E2D3D] overflow-hidden aspect-16/10 shadow-xl">
              <img
                src={IMAGES.engine}
                alt="Automotive technician testing vehicle air conditioning and engine diagnostics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111A]/95 via-[#08111A]/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-[#E2E8F0]">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] bg-[#162B3F] px-2 py-0.5 mb-1.5 border border-[#F59E0B]/30">
                  Precision Bay Equipment
                </div>
                <p className="font-heading text-xl sm:text-2xl font-bold text-white">Engine &amp; Air Conditioning Diagnostics</p>
                <p className="text-[#94A3B8] text-xs mt-1">
                  Computerized diagnostics, R-134a/R-1234yf climate servicing, timing, cooling, and mechanical overhaul.
                </p>
              </div>
            </div>

            {/* Card 2: Official ASE Certified Emblem & Standards */}
            <div className="group relative bg-[#0F1E2E] border-2 border-[#1E2D3D] hover:border-[#F59E0B] overflow-hidden p-8 flex flex-col justify-between shadow-xl transition-all">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#F59E0B] bg-[#162B3F] px-3 py-1 border border-[#F59E0B]/30">
                    Industry Standard
                  </div>
                  <span className="text-xs font-mono text-[#8E9CA8]">Belton, TX</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Real ASE Emblem */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-[#08111A] p-2 border border-[#F59E0B]/40 shadow-lg flex items-center justify-center">
                    <img
                      src={IMAGES.ase}
                      alt="ASE Certified Automotive Service Excellence Logo"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      ASE Certified Mechanical Standards
                    </h3>
                    <p className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                      Automotive Service Excellence
                    </p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Rigorous technical knowledge and diagnostic proficiency applied to every light-duty automotive repair.
                    </p>
                  </div>
                </div>

                {/* ASE Key Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C0CBD4] pt-2 border-t border-[#1E2D3D]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>Drivetrain &amp; Transmission Mastery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>Engine Performance Diagnostics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>Heating &amp; Air Conditioning (A/C)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span>Brakes &amp; Hydraulic Systems</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1E2D3D] flex items-center justify-between">
                <span className="text-xs text-[#8E9CA8]">Honest evaluations &amp; verified procedures</span>
                <button
                  type="button"
                  onClick={() => openEmailModal({ subject: "ASE Certified Repair Inquiry - GABE'S AUTOMOTIVE" })}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F59E0B] hover:text-[#FBBF24] transition-colors cursor-pointer"
                >
                  <span>Consult by Email</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS HOURS & LOCATION BANNER */}
      <section className="py-20 bg-[#F8F9FA] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E2E8F0] p-8 lg:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D97706]">
                  <span className="w-2 h-0.5 bg-[#D97706]" />
                  PLAN YOUR VISIT
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#08111A]">
                  Business Hours &amp; Location
                </h3>
                <p className="text-sm text-[#5A6B7C] leading-relaxed max-w-xl">
                  Located along US Highway 190 in Belton, Texas. For light-duty repair consultations, drop-off arrangements, or questions regarding our schedule, reach out directly by email.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-[#08111A] font-semibold">
                    <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                    <span>6971 W US Highway 190, Belton, TX 76513</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#5A6B7C]">
                    <Clock className="w-4 h-4 text-[#F59E0B] shrink-0" aria-hidden="true" />
                    <span>Monday–Friday: 8:00 AM–5:00 PM CT</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => openEmailModal({ subject: "Location & Schedule Inquiry - GABE'S AUTOMOTIVE" })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#08111A] bg-[#F59E0B] hover:bg-[#FBBF24] transition-all cursor-pointer shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#08111A] bg-white hover:bg-[#08111A] hover:text-white border border-[#CBD5E1] transition-all cursor-pointer"
                >
                  <span>Contact Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
