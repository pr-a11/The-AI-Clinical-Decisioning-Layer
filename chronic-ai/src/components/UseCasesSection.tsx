"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Stethoscope, Globe } from "lucide-react";

const useCases = [
  {
    icon: Stethoscope,
    title: "Primary Care Telehealth",
    description:
      "Eliminate wait time chaos. The AI autonomously triages every incoming patient, ensuring doctors only see urgent cases flagged for immediate attention.",
    href: "#",
  },
  {
    icon: Building2,
    title: "Hospital Command Centers",
    description:
      "Integrate into your EMR for real-time risk stratification across entire patient populations — from ED intake to discharge planning.",
    href: "#",
  },
  {
    icon: Globe,
    title: "Global Health Platforms",
    description:
      "Deploy in low-bandwidth environments with multilingual support. Our edge-optimized AI makes clinical decisioning accessible everywhere.",
    href: "#",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(16,185,129,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Use Cases</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            Built for every{" "}
            <span className="gradient-text">clinical context.</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto font-light">
            From solo practices to enterprise health systems, the Decisioning Layer adapts
            to your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 group flex flex-col gap-4"
            >
              <div className="feature-icon">
                <uc.icon size={20} className="text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white">{uc.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed flex-1">
                {uc.description}
              </p>
              <button
                onClick={() => alert("Loading case study...")}
                className="flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:gap-3 transition-all mt-auto"
              >
                Explore <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
