import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import ThemeToggle from "../../common/ThemeToggle";

const Navbar = () => {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Journey",
      href: "#journey",
    },
    {
      name: "Trust",
      href: "#trust",
    },
    {
      name: "Reviews",
      href: "#reviews",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6 ">
        
        {/* NAVBAR */}
        <div
          className={`relative flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 sm:py-4 bg-white ${
            scrolled
              ? "border-white/10 bg-white/40 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-[#0f172a]/70"
              : "border-white/40 bg-white/70 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0f172a]/60"
          }`}
        >
          
          {/* LEFT */}
          <div className="flex items-center gap-3 bg-whit">
            
            <img
              src="/logo.jpg"
              alt="logo"
              className="h-10 w-10 rounded-xl object-cover shadow-lg sm:h-11 sm:w-11"
            />

            <div>
              <h1 className="text-base font-bold text-gray-900 dark:text-white sm:text-lg">
                MediRoute AI
              </h1>

              <p className="hidden text-xs text-gray-500 dark:text-gray-400 sm:block">
                Smart Healthcare Assistance
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            
            {/* LOGIN */}
            <Link to="/login">
  <button className="hidden text-sm font-medium text-gray-600 transition hover:text-purple-600 md:block text-white">
    Login
  </button>
</Link>

            {/* CTA */}
            <Link to="/signup">
  <button className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] active:scale-[0.98] md:block">
    Get Started
  </button>
</Link>
            {/* THEME TOGGLE */}
            <ThemeToggle />

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-xl bg-white/80 p-2 shadow-lg backdrop-blur-xl transition hover:scale-105 dark:bg-[#1e293b] lg:hidden"
            >
              {mobileMenu ? (
                <X
                  size={22}
                  className="text-gray-800 dark:text-white"
                />
              ) : (
                <Menu
                  size={22}
                  className="text-gray-800 dark:text-white"
                />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="mt-4 overflow-hidden rounded-3xl border border-white/20 bg-white/80 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-[#0f172a]/90 lg:hidden"
            >
              
              <div className="flex flex-col p-6">
                
                {/* LINKS */}
                <div className="space-y-5">
                  
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={() => setMobileMenu(false)}
                      className="block text-base font-medium text-gray-700 transition hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* DIVIDER */}
                <div className="my-6 h-[1px] w-full bg-gray-200 dark:bg-white/10" />

                {/* ACTIONS */}
                <div className="flex flex-col gap-4">

  <Link
    to="/login"
    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 text-center font-medium text-gray-700 transition hover:bg-gray-50 dark:border-white/10 dark:bg-[#1e293b] dark:text-white dark:hover:bg-[#263548]"
  >
    Login
  </Link>

  <Link
    to="/signup"
    className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-center font-semibold text-white shadow-lg transition hover:scale-[1.02]"
  >
    Get Started
  </Link>

</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;