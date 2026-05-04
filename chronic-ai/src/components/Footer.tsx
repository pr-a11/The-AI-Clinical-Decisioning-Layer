"use client";

import { Network } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Integrations", "Changelog", "Status"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy Policy", "Terms of Service", "HIPAA BAA", "Security"],
  Resources: ["Documentation", "API Reference", "Support", "Community"],
};

export default function Footer() {
  return (
    <footer
      className="py-16 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="feature-icon w-8 h-8 rounded-lg bg-black/50 border-white/10">
                <Network size={15} className="text-emerald-400" />
              </div>
              <span className="font-bold text-sm tracking-tight leading-tight max-w-[120px]">
                The AI Clinical Decisioning Layer
              </span>
            </a>
            <p className="text-xs text-white/35 leading-relaxed max-w-[180px]">
              The intelligent engine built for modern telehealth.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((item) => {
                  const getHref = (name: string) => {
                    if (name === "Features") return "/#features";
                    if (name === "Integrations") return "/#integrations";
                    return `/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                  };

                  return (
                    <li key={item}>
                      <a
                        href={getHref(item)}
                        className="text-sm text-white/50 hover:text-emerald-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p className="text-xs text-white/25">
            © 2026 The AI Clinical Decisioning Layer. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] font-medium px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "#10b981",
              }}
            >
              HIPAA Compliant
            </span>
            <span
              className="text-[10px] font-medium px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              SOC 2 Type II
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
