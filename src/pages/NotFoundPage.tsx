import React from "react";
import { ArrowLeft, Home, Wrench, Mail } from "lucide-react";
import { useNavigation } from "../context/NavigationContext";
import { useEmailModal } from "../context/EmailModalContext";
import { BUSINESS_INFO } from "../data/business";

export function NotFoundPage() {
  const { navigate } = useNavigation();
  const { openEmailModal } = useEmailModal();

  return (
    <div className="w-full min-h-[65vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]">
      <div className="max-w-xl w-full bg-white border border-[#E2E8F0] p-8 sm:p-12 text-center space-y-6 shadow-lg">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#D97706] uppercase bg-[#FEF3C7] px-3 py-1 border border-[#FDE68A]">
          ERROR 404 · PAGE NOT FOUND
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#08111A] tracking-tight">
          Page Not Located
        </h1>

        <p className="text-sm sm:text-base text-[#5A6B7C] leading-relaxed">
          The page or route you requested is not available. Please navigate to one of the main sections of GABE&apos;S AUTOMOTIVE &amp; TRANSMISSION below.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] text-sm font-bold uppercase tracking-wider text-white bg-[#08111A] hover:bg-[#162B3F] transition-colors cursor-pointer shadow-sm"
          >
            <Home className="w-4 h-4 shrink-0 text-[#F59E0B]" aria-hidden="true" />
            <span>Return to Home</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/services")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[46px] text-sm font-bold uppercase tracking-wider text-[#08111A] border border-[#CBD5E1] bg-white hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          >
            <Wrench className="w-4 h-4 shrink-0 text-[#D97706]" aria-hidden="true" />
            <span>View Services</span>
          </button>
        </div>

        <div className="pt-6 border-t border-[#F1F5F9] text-xs text-[#8E9CA8]">
          Need immediate assistance? Email us directly at{" "}
          <button
            type="button"
            onClick={() => openEmailModal()}
            className="text-[#08111A] font-bold underline hover:text-[#D97706] cursor-pointer"
          >
            {BUSINESS_INFO.email}
          </button>
        </div>
      </div>
    </div>
  );
}
