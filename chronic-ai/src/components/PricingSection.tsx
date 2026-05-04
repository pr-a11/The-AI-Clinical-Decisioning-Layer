"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$299",
    period: "/mo",
    description: "Perfect for solo practices and small clinics.",
    features: [
      "Up to 500 patients/month",
      "Autonomous triage engine",
      "Basic risk scoring",
      "Email support",
      "EHR integrations (1)",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "$899",
    period: "/mo",
    description: "Ideal for growing telehealth platforms.",
    features: [
      "Up to 5,000 patients/month",
      "Full triage + pharmacy Rx layer",
      "Advanced risk assessment",
      "Priority Slack support",
      "EHR integrations (5)",
      "Custom AI model fine-tuning",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For hospital systems and large-scale deployments.",
    features: [
      "Unlimited patient volume",
      "Dedicated AI inference cluster",
      "Full HIPAA audit trails",
      "24/7 white-glove support",
      "Unlimited EHR integrations",
      "On-premise deployment option",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-28 px-6 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(16,185,129,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
            Transparent pricing.
            <br />
            <span className="gradient-text">Unlimited value.</span>
          </h2>
          <p className="text-white/45 text-base font-light">
            No hidden fees. Cancel anytime. 14-day free trial included.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              id={`plan-${plan.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 flex flex-col gap-6 relative"
              style={
                plan.highlight
                  ? {
                      border: "1px solid rgba(16,185,129,0.35)",
                      background:
                        "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(15,23,42,0.7) 100%)",
                      boxShadow:
                        "0 0 40px rgba(16,185,129,0.12), 0 20px 60px rgba(0,0,0,0.5)",
                    }
                  : {}
              }
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="stat-chip text-xs px-4 py-1.5 flex items-center gap-1.5">
                    <Zap size={11} />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-bold text-lg text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-white/40 text-sm">{plan.description}</p>
              </div>

              <div className="flex items-end gap-1">
                <span className="text-4xl font-black text-white">
                  {plan.price}
                </span>
                <span className="text-white/40 text-sm mb-1.5">
                  {plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-auto flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "btn-primary"
                    : "btn-ghost"
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
