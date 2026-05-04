"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Network, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="navbar"
        style={{
          borderBottomColor: scrolled
            ? "rgba(16,185,129,0.1)"
            : "rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="feature-icon w-9 h-9 rounded-xl group-hover:scale-105 transition-transform bg-black/50 border-white/10">
              <Network size={18} className="text-emerald-400" />
            </div>
            <span className="font-bold text-base tracking-tight hidden sm:block">
              The AI Clinical Decisioning Layer
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => alert("Sign In portal coming soon!")} className="btn-ghost text-sm py-2 px-5">
              Sign In
            </button>
            <button onClick={() => alert("Dashboard access coming soon!")} className="btn-primary pulse text-sm py-2.5 px-5">
              Get Started
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-90 glass border-b border-white/5 md:hidden"
          >
            <div className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <a href="#" className="btn-ghost text-sm justify-center">
                  Sign In
                </a>
                <a href="#" className="btn-primary text-sm justify-center pulse">
                  Get Started <ChevronRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
