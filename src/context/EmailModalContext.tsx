import React, { createContext, useContext, useState, ReactNode } from "react";
import { BUSINESS_INFO } from "../data/business";
import { Mail, Copy, Check, ExternalLink, X, Send } from "lucide-react";

interface EmailModalOptions {
  subject?: string;
  body?: string;
  serviceTitle?: string;
}

interface EmailModalContextType {
  openEmailModal: (options?: EmailModalOptions) => void;
  closeEmailModal: () => void;
}

const EmailModalContext = createContext<EmailModalContextType | undefined>(undefined);

export function EmailModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("Repair & Maintenance Inquiry");
  const [body, setBody] = useState("");
  const [serviceTitle, setServiceTitle] = useState("");
  const [copied, setCopied] = useState(false);

  const openEmailModal = (options?: EmailModalOptions) => {
    const defaultSubject = options?.subject || "Repair & Maintenance Inquiry - GABE'S AUTOMOTIVE";
    const defaultBody = options?.body || "Hello Gabe's Automotive & Transmission,\n\nI would like to inquire about servicing my vehicle:\nVehicle (Year, Make, Model):\n\nDescription of work needed or symptoms:\n\nThank you,";
    
    setSubject(defaultSubject);
    setBody(defaultBody);
    setServiceTitle(options?.serviceTitle || "");
    setCopied(false);
    setIsOpen(true);
  };

  const closeEmailModal = () => {
    setIsOpen(false);
  };

  const email = BUSINESS_INFO.email;

  // Construct different links
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const yahooUrl = `https://compose.mail.yahoo.com/?to=${encodeURIComponent(email)}&subj=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <EmailModalContext.Provider value={{ openEmailModal, closeEmailModal }}>
      {children}

      {/* Global Email Launcher Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="email-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08111A]/80 backdrop-blur-xs animate-in fade-in duration-150"
        >
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={closeEmailModal} />

          <div className="relative w-full max-w-xl bg-white border-2 border-[#08111A] shadow-2xl p-6 sm:p-8 space-y-6 text-[#151D24] z-10 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#E2E8F0] pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D97706] bg-[#FEF3C7] px-2 py-0.5 border border-[#FDE68A]">
                  Email Dispatcher
                </div>
                <h3 id="email-modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-[#08111A] mt-1">
                  Send Email to Gabe&apos;s Automotive
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6B7C] mt-0.5">
                  Choose your preferred email client or copy the address below:
                </p>
              </div>

              <button
                type="button"
                onClick={closeEmailModal}
                className="p-2 text-[#5A6B7C] hover:text-[#08111A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Recipient Display & Quick Copy */}
            <div className="bg-[#F8F9FA] p-4 border border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8E9CA8]">Recipient Address:</span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#08111A] break-all">
                  {email}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#08111A] border border-[#CBD5E1] bg-white hover:bg-[#F1F5F9] transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#5A6B7C]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Launch Options Grid */}
            <div className="space-y-3">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#08111A]">
                Select Email Application:
              </span>

              {/* 1. Gmail Web */}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTimeout(closeEmailModal, 300)}
                className="flex items-center justify-between p-3.5 bg-white border border-[#CBD5E1] hover:border-[#F59E0B] hover:bg-[#FFFBEB] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335] font-bold text-xs">
                    M
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-[#08111A] group-hover:text-[#D97706]">
                      Open in Gmail Webmail
                    </span>
                    <span className="block text-[11px] text-[#5A6B7C]">
                      Opens mail.google.com in a new tab with details prefilled
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5A6B7C] group-hover:text-[#D97706] shrink-0" />
              </a>

              {/* 2. Default System Mail App */}
              <a
                href={mailtoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTimeout(closeEmailModal, 300)}
                className="flex items-center justify-between p-3.5 bg-white border border-[#CBD5E1] hover:border-[#F59E0B] hover:bg-[#FFFBEB] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#08111A] flex items-center justify-center text-[#F59E0B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-[#08111A] group-hover:text-[#D97706]">
                      Default Email App (Apple Mail, Outlook, Thunderbird)
                    </span>
                    <span className="block text-[11px] text-[#5A6B7C]">
                      Launches the default mail client configured on your device
                    </span>
                  </div>
                </div>
                <Send className="w-4 h-4 text-[#5A6B7C] group-hover:text-[#D97706] shrink-0" />
              </a>

              {/* 3. Outlook / Office 365 Web */}
              <a
                href={outlookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTimeout(closeEmailModal, 300)}
                className="flex items-center justify-between p-3.5 bg-white border border-[#CBD5E1] hover:border-[#F59E0B] hover:bg-[#FFFBEB] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#0078D4]/10 flex items-center justify-center text-[#0078D4] font-bold text-xs">
                    O
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-[#08111A] group-hover:text-[#D97706]">
                      Open in Outlook.com / Microsoft 365
                    </span>
                    <span className="block text-[11px] text-[#5A6B7C]">
                      Opens Outlook webmail in a new tab with recipient prefilled
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5A6B7C] group-hover:text-[#D97706] shrink-0" />
              </a>

              {/* 4. Yahoo Mail Web */}
              <a
                href={yahooUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTimeout(closeEmailModal, 300)}
                className="flex items-center justify-between p-3.5 bg-white border border-[#CBD5E1] hover:border-[#F59E0B] hover:bg-[#FFFBEB] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#6001D2]/10 flex items-center justify-center text-[#6001D2] font-bold text-xs">
                    Y
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-[#08111A] group-hover:text-[#D97706]">
                      Open in Yahoo Mail Web
                    </span>
                    <span className="block text-[11px] text-[#5A6B7C]">
                      Opens Yahoo compose in a new tab
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5A6B7C] group-hover:text-[#D97706] shrink-0" />
              </a>
            </div>

            {/* Subject & Body Preview / Customizer */}
            <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
              <label htmlFor="modal-subject" className="block text-xs font-bold uppercase tracking-wider text-[#5A6B7C]">
                Subject Line:
              </label>
              <input
                id="modal-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 text-xs font-mono bg-[#F8F9FA] border border-[#CBD5E1] text-[#08111A] focus:outline-none focus:border-[#F59E0B]"
              />
            </div>

            {/* Footer */}
            <div className="pt-2 flex items-center justify-between text-xs text-[#8E9CA8]">
              <span>6971 W US Highway 190 · Belton, TX</span>
              <button
                type="button"
                onClick={closeEmailModal}
                className="font-bold text-[#08111A] hover:underline cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </EmailModalContext.Provider>
  );
}

export function useEmailModal() {
  const context = useContext(EmailModalContext);
  if (!context) {
    throw new Error("useEmailModal must be used within an EmailModalProvider");
  }
  return context;
}
