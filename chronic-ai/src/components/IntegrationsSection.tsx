"use client";

import { motion } from "framer-motion";

const integrations = [
  "Epic EHR",
  "Athenahealth",
  "Doximity",
  "Teladoc",
  "Doxy.me",
  "eClinicalWorks",
  "ModMed",
  "DrChrono",
  "Kareo",
  "Veradigm",
  "NextGen",
  "Cerner",
];

export default function IntegrationsSection() {
  const doubled = [...integrations, ...integrations];

  return (
    <section
      id="integrations"
      className="py-20 relative overflow-hidden border-y"
      style={{ borderColor: "rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Integrations</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Connects with your{" "}
            <span className="gradient-text">existing stack.</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto font-light">
            The Decisioning Layer plugs seamlessly into the tools your team already uses —
            zero migration headache.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #09090b 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, #09090b 0%, transparent 100%)",
          }}
        />
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="mx-4 glass px-6 py-3 rounded-xl text-sm font-medium text-white/50 whitespace-nowrap flex-shrink-0"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
