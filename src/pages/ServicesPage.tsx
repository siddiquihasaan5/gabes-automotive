import React, { useState } from "react";
import { Mail, Check, ArrowRight, Cog, Wrench, ShieldCheck, Fuel, Layers, Car, Wind, AlertCircle } from "lucide-react";
import { useEmailModal } from "../context/EmailModalContext";
import { BUSINESS_INFO, SERVICES, LIGHT_DUTY_PLATFORMS, IMAGES } from "../data/business";

export function ServicesPage() {
  const { openEmailModal } = useEmailModal();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedInquiryService, setSelectedInquiryService] = useState<string>("Transmission Services & Repairs");
  const [vehicleClass, setVehicleClass] = useState<string>("Sedan / Passenger Car");
  const [vehicleNote, setVehicleNote] = useState<string>("");
  const [symptomNote, setSymptomNote] = useState<string>("");

  const filteredServices = activeFilter === "all" 
    ? SERVICES 
    : SERVICES.filter(s => {
        if (activeFilter === "transmission") return s.id === "transmission";
        if (activeFilter === "engine-ac") return s.id === "engine-repairs-replacements" || s.id === "air-conditioning";
        if (activeFilter === "maintenance") return s.id === "brake-service" || s.id === "oil-changes" || s.id === "general-maintenance";
        return true;
      });

  return (
    <div className="w-full">
      {/* 1. PAGE HEADER */}
      <section className="bg-[#08111A] text-white py-16 sm:py-20 border-b border-[#1E2D3D] relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              <span className="w-2 h-0.5 bg-[#F59E0B]" />
              LIGHT-DUTY MECHANICAL REPAIRS &amp; MAINTENANCE
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Automotive Repair &amp; Mechanical Services
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Explore our light-duty automotive maintenance and mechanical repair services in Belton, Texas. Contact us directly by email to discuss your vehicle symptoms and required work.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SERVICE TABS FILTER */}
      <section className="bg-white border-b border-[#E2E8F0] sticky top-20 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-xs font-bold text-[#8E9CA8] uppercase tracking-wider mr-2 hidden sm:inline">Filter:</span>
            {[
              { id: "all", label: "All Services (6)" },
              { id: "transmission", label: "Transmission" },
              { id: "engine-ac", label: "Engine & A/C" },
              { id: "maintenance", label: "Brakes & Maintenance" }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#08111A] text-[#F59E0B] shadow-sm"
                    : "bg-[#F1F5F9] text-[#5A6B7C] hover:text-[#08111A] hover:bg-[#E2E8F0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => openEmailModal({ subject: "Repair Inquiry - GABE'S AUTOMOTIVE" })}
            className="hidden lg:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706] hover:text-[#B45309] cursor-pointer"
          >
            <span>Ask About Your Repair via Email</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 3. SERVICES CATALOG */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {filteredServices.map((service, index) => {
              const icons = [Cog, Wrench, Wind, ShieldCheck, Fuel, Layers];
              const IconComp = icons[index % icons.length];

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="bg-white border border-[#E2E8F0] p-8 lg:p-10 shadow-sm hover:border-[#CBD5E1] transition-all relative overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Header & Meta */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#08111A] flex items-center justify-center text-[#F59E0B]">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#08111A] text-[#F59E0B]">
                          0{index + 1}
                        </span>
                      </div>
                      <h2 className="font-heading text-3xl font-bold text-[#08111A] tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm font-semibold text-[#D97706]">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Full Description & Scope Points */}
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-sm sm:text-base text-[#151D24] leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <div className="bg-[#F8F9FA] p-6 border border-[#E2E8F0]">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#08111A] mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                          Service Scope &amp; Typical Work:
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#151D24]">
                          {service.keyPoints.map((point) => (
                            <li key={point} className="flex items-start gap-2.5">
                              <Check className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="leading-snug">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#F1F5F9]">
                        <span className="text-xs text-[#5A6B7C]">
                          Light-duty cars, SUVs, and half-ton pickups. Work scheduled based on shop availability.
                        </span>
                        <button
                          type="button"
                          onClick={() => openEmailModal({
                            subject: `Inquiry: ${service.title} - GABE'S AUTOMOTIVE`,
                            serviceTitle: service.title,
                            body: `Hello Gabe's Automotive & Transmission,\n\nI would like to inquire about ${service.title}.\nVehicle (Year, Make, Model, Mileage):\n\nDescription of issue or required work:\n\nThank you,`
                          })}
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08111A] bg-gradient-to-r from-[#F59E0B] to-[#E58D05] hover:from-[#FBBF24] hover:to-[#F59E0B] transition-colors whitespace-nowrap min-h-[42px] shadow-sm cursor-pointer"
                        >
                          <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>Email About This Service</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* 5. LIGHT-DUTY PLATFORMS SPECIALIZATION */}
      <section className="py-20 bg-[#F8F9FA] text-[#151D24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D97706] mb-3">
              <span className="w-2 h-0.5 bg-[#D97706]" />
              EXCLUSIVELY LIGHT-DUTY PLATFORMS
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08111A]">
              Light-Duty Vehicle Specialization
            </h2>
            <p className="mt-3 text-base text-[#5A6B7C] leading-relaxed">
              We focus our shop exclusively on light-duty passenger vehicles, crossovers, SUVs, and half-ton pickup trucks. Our lifts, scan tools, and mechanical tooling are calibrated specifically for this category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIGHT_DUTY_PLATFORMS.map((platform, i) => (
              <div key={platform.title} className="bg-white border border-[#E2E8F0] p-7 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="text-xs font-mono font-bold text-[#D97706] bg-[#FEF3C7] px-2.5 py-1 w-max border border-[#FDE68A]">
                    CATEGORY 0{i + 1}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#08111A]">
                    {platform.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5A6B7C] border-b border-[#F1F5F9] pb-2">
                    {platform.scope}
                  </div>
                  <p className="text-xs text-[#5A6B7C] leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="p-3 bg-[#F8F9FA] border border-[#E2E8F0] text-[11px] text-[#64748B]">
                    <span className="font-bold text-[#08111A] block mb-1">Common Platforms:</span>
                    <span>{platform.examples}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => openEmailModal({
                      subject: `${platform.title} Service Inquiry - GABE'S AUTOMOTIVE`,
                      body: `Hello Gabe's Automotive,\n\nI would like to inquire about servicing my ${platform.title}:\nVehicle (Year, Make, Model, Mileage):\n\nRequired service or symptoms:\n\nThank you,`
                    })}
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-[#08111A] bg-[#F8F9FA] hover:bg-[#08111A] hover:text-[#F59E0B] border border-[#CBD5E1] transition-all cursor-pointer"
                  >
                    <span>Check Service Fit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SERVICE INQUIRY BUILDER */}
      <section className="py-20 bg-white border-t border-[#E2E8F0] text-[#151D24]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#08111A] text-white p-8 sm:p-12 border border-[#1E2D3D] shadow-2xl space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-2">
                <span className="w-2 h-0.5 bg-[#F59E0B]" />
                DIRECT WORKSHOP INTAKE
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Not Sure Which Service You Need?
              </h2>

              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mt-2">
                Configure your repair details below to generate a preformatted email directly addressed to our Belton, Texas shop.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              {/* Step 1: Select Service */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-2">
                  1. Select Service Category:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedInquiryService(s.title)}
                      className={`text-left px-3.5 py-2.5 border transition-all cursor-pointer ${
                        selectedInquiryService === s.title
                          ? "bg-[#F59E0B] text-[#08111A] font-bold border-[#F59E0B] shadow-sm"
                          : "bg-[#0E1E2C] text-[#C0CBD4] border-[#1E2D3D] hover:text-white hover:border-[#385169]"
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Vehicle Classification (Light-Duty only) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-2">
                  2. Select Light-Duty Vehicle Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {["Sedan / Coupe", "SUV / Crossover", "Light Pickup (1/2 Ton)", "Minivan / Wagon"].map((cls) => (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => setVehicleClass(cls)}
                      className={`py-2 px-3 text-center border font-semibold transition-all cursor-pointer ${
                        vehicleClass === cls
                          ? "bg-[#162B3F] text-[#F59E0B] border-[#F59E0B]"
                          : "bg-[#0E1E2C] text-[#94A3B8] border-[#1E2D3D] hover:text-white"
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Vehicle Spec */}
              <div>
                <label htmlFor="service-vehicle" className="block text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-1.5">
                  3. Vehicle Year, Make &amp; Model:
                </label>
                <input
                  id="service-vehicle"
                  type="text"
                  value={vehicleNote}
                  onChange={(e) => setVehicleNote(e.target.value)}
                  placeholder="e.g. 2018 Ford F-150, 2020 Toyota RAV4, 2016 Honda Accord"
                  className="w-full px-4 py-3 text-sm bg-[#0E1E2C] border border-[#1E2D3D] text-white placeholder-[#5A6B7C] focus:border-[#F59E0B] focus:outline-none"
                />
              </div>

              {/* Step 4: Symptoms description */}
              <div>
                <label htmlFor="service-symptoms" className="block text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-1.5">
                  4. Brief Description of Issue or Service Required:
                </label>
                <textarea
                  id="service-symptoms"
                  rows={3}
                  value={symptomNote}
                  onChange={(e) => setSymptomNote(e.target.value)}
                  placeholder="e.g. Slipping between 2nd and 3rd gear, A/C blowing warm air, check engine light on, brake squeal, or scheduled maintenance..."
                  className="w-full px-4 py-3 text-sm bg-[#0E1E2C] border border-[#1E2D3D] text-white placeholder-[#5A6B7C] focus:border-[#F59E0B] focus:outline-none resize-none"
                />
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-[#1E2D3D]">
                <div className="text-xs text-[#8E9CA8]">
                  Directly dispatched to <span className="text-[#F59E0B] font-mono">{BUSINESS_INFO.email}</span>.
                </div>
                <button
                  type="button"
                  onClick={() => openEmailModal({
                    subject: `${selectedInquiryService} Inquiry - ${vehicleNote || "Vehicle"}`,
                    serviceTitle: selectedInquiryService,
                    body: [
                      `Hello Gabe's Automotive & Transmission,`,
                      ``,
                      `I am requesting a service consultation regarding my light-duty vehicle:`,
                      `Service Needed: ${selectedInquiryService}`,
                      `Vehicle Type: ${vehicleClass}`,
                      `Vehicle (Year, Make, Model): ${vehicleNote || "[Please specify your vehicle]"}`,
                      ``,
                      `Description of symptoms or requested mechanical work:`,
                      `${symptomNote || "[Please describe any unusual noises, shifting behavior, warning indicators, or maintenance needed]"}`,
                      ``,
                      `Thank you,`,
                      `[Your Name]`
                    ].join("\n")
                  })}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[48px] text-sm font-bold uppercase tracking-wider text-[#08111A] bg-gradient-to-r from-[#F59E0B] to-[#E58D05] hover:from-[#FBBF24] hover:to-[#F59E0B] transition-all whitespace-nowrap shadow-md cursor-pointer"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Send Email Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
