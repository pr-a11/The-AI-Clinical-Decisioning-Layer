"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UgcSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(16,185,129,0.03) 0%, transparent 70%)",
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
          <p className="section-label mb-4">In Production</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            Empowering modern <span className="gradient-text">care teams.</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto font-light">
            See how forward-thinking clinics and telehealth platforms are using AI to transform their operations.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card overflow-hidden group"
          >
            <div className="relative h-64 w-full">
              <Image 
                src="/ugc_dashboard.png" 
                alt="Telehealth Dashboard" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-bold text-white mb-1">Intelligent Dashboards</h3>
                <p className="text-xs text-white/50">Real-time triage data mapped directly to clinical workflows.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card overflow-hidden group"
          >
            <div className="relative h-64 w-full">
              <Image 
                src="/ugc_doctor.png" 
                alt="Modern Doctor" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-bold text-white mb-1">AI-Assisted Physicians</h3>
                <p className="text-xs text-white/50">Doctors review comprehensive AI summaries before the visit begins.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card overflow-hidden group"
          >
            <div className="relative h-64 w-full">
              <Image 
                src="/ugc_pharmacy.png" 
                alt="Pharmacy Infrastructure" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-bold text-white mb-1">Automated Rx Routing</h3>
                <p className="text-xs text-white/50">Prescription drafts seamlessly routed to pharmacy networks.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
