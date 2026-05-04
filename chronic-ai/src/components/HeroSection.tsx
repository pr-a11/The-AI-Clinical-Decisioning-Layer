"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  ChevronRight,
  Play,
} from "lucide-react";

const stats = [
  { value: "98%", label: "Triage Accuracy" },
  { value: "3.2s", label: "Avg Decision Time" },
  { value: "150+", label: "Clinics Onboarded" },
  { value: "40%", label: "Ops Cost Reduction" },
];

const badges = [
  { icon: Shield, label: "HIPAA Compliant" },
  { icon: Zap, label: "Real-time AI" },
  { icon: Sparkles, label: "Autonomous Triage" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-48 pb-32 min-h-[95vh] flex items-center justify-center overflow-hidden px-6 border-b border-white/5">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 saturate-[0.8] brightness-110"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        {/* Fade to background color at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/30 via-[#09090b]/60 to-[#09090b] z-10" />
        
        {/* Emerald cinematic edge glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15)_0%,transparent_60%)] z-10" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="grid-pattern absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="stat-chip">
            <Sparkles size={12} />
            Now in Beta — Limited Clinic Access
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6"
        >
          The Intelligent Brain
          <br />
          <span className="gradient-text text-glow">
            for Modern Healthcare.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Supercharge your clinic with AI-driven triage and automated clinical
          decisioning. Built for telehealth providers who demand precision at
          scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => alert("Dashboard provisioning in progress...")}
            id="launch-dashboard-btn"
            className="btn-primary text-base px-8 py-4 glow-emerald"
          >
            Launch Dashboard
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => alert("Demo video loading...")}
            id="watch-demo-btn"
            className="btn-ghost text-base px-6 py-4"
          >
            <Play size={16} className="text-emerald-400" />
            Watch a Demo
          </button>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-20"
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/50 border border-white/08"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <b.icon size={13} className="text-emerald-400" />
              {b.label}
            </div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.08 }}
              className="glass-card p-5 text-center"
              style={{ borderRadius: "16px" }}
            >
              <div className="text-2xl md:text-3xl font-black emerald-text mb-1">
                {s.value}
              </div>
              <div className="text-xs text-white/40 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted by */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-xs text-white/25 flex items-center justify-center gap-2"
        >
          <ChevronRight size={11} className="text-emerald-500" />
          Trusted by forward-thinking telehealth platforms
          <ChevronRight size={11} className="text-emerald-500" />
        </motion.p>
      </div>
    </section>
  );
}
