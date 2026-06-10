import { motion } from "framer-motion";

import { useState } from "react";
import ContactSupportModal
from "../../common/ContactSupportModal";
import {
  HeartPulse,
  ShieldCheck,
  QrCode,
  Pill,
  Mail,
} from "lucide-react";

const Footer = () => {
  const [
  openSupport,
  setOpenSupport,
] = useState(false);
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0f172a] pt-20 text-white lg:pt-24"
    >
      
      {/* TOP GLOW */}
      <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-3xl sm:h-[300px] sm:w-[300px]" />

      <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-purple-500/10 blur-3xl sm:h-[300px] sm:w-[300px]" />

      {/* TOP BORDER */}
      <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 lg:pb-16">
          
          {/* BRAND */}
          <div>
            
            <div className="flex items-center gap-3">
              
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-10 w-10 rounded-xl object-cover shadow-lg sm:h-12 sm:w-12 sm:rounded-2xl"
              />

              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  MediRoute AI
                </h2>

                <p className="text-xs text-gray-400 sm:text-sm">
                  Smart Healthcare Assistance
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-base">
              Simplifying healthcare accessibility with intelligent
              scheme verification, medicine management,
              and secure medical sharing.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            
            <h3 className="text-base font-semibold sm:text-lg">
              Quick Links
            </h3>

            <div className="mt-5 space-y-4 text-sm text-gray-400 sm:mt-6 sm:text-base">
              
              <a
                href="#features"
                className="block transition hover:text-white"
              >
                Features
              </a>

              <a
                href="#journey"
                className="block transition hover:text-white"
              >
                Healthcare Journey
              </a>

              <a
                href="#trust"
                className="block transition hover:text-white"
              >
                Trust
              </a>

              <a
                href="#reviews"
                className="block transition hover:text-white"
              >
                Reviews
              </a>

              {/* MAIL REDIRECT */}
              <button
  onClick={() =>
    setOpenSupport(true)
  }
  className="flex items-center gap-2 transition hover:text-white"
>
  <Mail size={16} />
  Contact
</button>
            </div>
          </div>

          {/* FEATURES */}
          <div>
            
            <h3 className="text-base font-semibold sm:text-lg">
              Core Features
            </h3>

            <div className="mt-5 space-y-4 sm:mt-6">
              
              <div className="flex items-center gap-3 text-sm text-gray-400 sm:text-base">
                <ShieldCheck size={18} />
                <span>Scheme Eligibility</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400 sm:text-base">
                <QrCode size={18} />
                <span>Secure QR Sharing</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400 sm:text-base">
                <Pill size={18} />
                <span>Medicine Tracking</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400 sm:text-base">
                <HeartPulse size={18} />
                <span>Emergency Support</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            
            <h3 className="text-base font-semibold sm:text-lg">
              Start Your Healthcare Journey
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:mt-6 sm:text-base">
              Experience secure and smarter healthcare access
              with MediRoute AI.
            </p>

            <button className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 sm:mt-8 sm:px-6 sm:text-base">
              Get Started
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 py-6 text-center text-xs text-gray-400 sm:py-8 sm:text-sm md:flex-row md:text-left"
        >
          
          <p>
            © 2026 MediRoute AI. All rights reserved.
          </p>

          <p>
            Crafted by{" "}
            <span className="font-semibold text-white">
              Akash Dokala
            </span>
          </p>
        </motion.div>
      </div>
      <ContactSupportModal
  open={openSupport}
  setOpen={setOpenSupport}
/>
    </footer>
  );
};

export default Footer;