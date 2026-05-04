"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Brain,
  Pill,
  AlertTriangle,
  Activity,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    transition: {
      duration: 3.5 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.3,
    },
  }),
};

const features = [
  {
    id: "autonomous-triage",
    icon: Brain,
    label: "Autonomous Triage",
    tag: "Core Engine",
    tagColor: "#10b981",
    description:
      "Our AI autonomously evaluates patient symptoms, medical history, and vitals to generate prioritized triage decisions in under 4 seconds — with physician-level precision.",
    bullets: [
      "Symptom clustering & differential diagnosis",
      "Acuity score generation (ESI 1-5)",
      "Routing to appropriate care pathway",
    ],
    accent: "rgba(16, 185, 129, 0.12)",
    iconColor: "#10b981",
    featured: true,
  },
  {
    id: "pharmacy-infrastructure",
    icon: Pill,
    label: "Pharmacy Infrastructure",
    tag: "Rx Layer",
    tagColor: "#6366f1",
    description:
      "End-to-end pharmacy automation that generates prescription drafts, checks drug interactions, and coordinates with licensed dispensaries — seamlessly embedded into your telehealth workflow.",
    bullets: [
      "Automated Rx generation & review",
      "Drug-drug interaction detection",
      "Real-time pharmacy network routing",
    ],
    accent: "rgba(99, 102, 241, 0.1)",
    iconColor: "#818cf8",
    featured: false,
  },
  {
    id: "risk-assessment",
    icon: AlertTriangle,
    label: "Risk Assessment",
    tag: "Safety Layer",
    tagColor: "#f59e0b",
    description:
      "Continuous patient risk stratification using longitudinal data models. Identifies high-risk patients before symptoms escalate and triggers proactive intervention protocols.",
    bullets: [
      "Predictive deterioration scoring",
      "Chronic disease risk flags",
      "Automated escalation triggers",
    ],
    accent: "rgba(245, 158, 11, 0.08)",
    iconColor: "#fbbf24",
    featured: false,
  },
];

const miniStats = [
  { icon: Activity, value: "4s", label: "Avg Decision" },
  { icon: CheckCircle2, value: "99.1%", label: "Safety Score" },
  { icon: TrendingUp, value: "8×", label: "Faster Intake" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Platform Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            Everything your clinic needs,
            <br />
            <span className="gradient-text">in one decisioning layer.</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto font-light">
            Purpose-built modules that integrate into your existing EHR and
            telehealth stack in days, not months.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {features.map((feat, i) => (
            <motion.div
              key={feat.id}
              id={feat.id}
              custom={i}
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="glass-card p-7 flex flex-col gap-5 cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${feat.accent}, rgba(15,23,42,0.7))`,
                minHeight: "340px",
              }}
            >
              {/* Tag */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    color: feat.tagColor,
                    background: `${feat.tagColor}15`,
                    border: `1px solid ${feat.tagColor}30`,
                  }}
                >
                  {feat.tag}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${feat.iconColor}15`,
                    border: `1px solid ${feat.iconColor}25`,
                  }}
                >
                  <feat.icon size={18} style={{ color: feat.iconColor }} />
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feat.label}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2 mt-auto">
                {feat.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-xs text-white/60"
                  >
                    <CheckCircle2
                      size={13}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: feat.iconColor }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mini stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-around gap-6"
        >
          {miniStats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="feature-icon w-11 h-11 rounded-xl">
                <s.icon size={18} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-2xl font-black emerald-text">{s.value}</div>
                <div className="text-xs text-white/40 font-medium">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
