"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="stat-chip">
              <Sparkles size={12} />
              Join 150+ clinics already live
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Ready to transform
            <br />
            <span className="gradient-text text-glow">your clinical ops?</span>
          </h2>

          <p className="text-white/45 text-lg mb-10 font-light max-w-xl mx-auto">
            Get set up in under 48 hours. No lock-in. No engineering resources
            required. Just plug in and let the AI work.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => alert("Dashboard provisioning in progress...")}
              id="cta-launch-btn"
              className="btn-primary text-base px-10 py-4 glow-emerald"
            >
              Launch Dashboard
              <ArrowRight size={18} />
            </button>
            <button onClick={() => alert("Sales chat opening...")} id="cta-demo-btn" className="btn-ghost text-base px-8 py-4">
              Talk to Sales
            </button>
          </div>

          <p className="mt-6 text-xs text-white/25">
            14-day free trial · No credit card required · HIPAA compliant
          </p>
        </motion.div>
      </div>
    </section>
  );
}
