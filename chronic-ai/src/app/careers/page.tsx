import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-card p-10 border border-white/5 bg-black/20">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Careers</h1>
          <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent mb-8"></div>
          <p className="text-white/60 leading-relaxed text-lg font-light">
            This section is currently being updated by the engineering team. Please check back later for full details regarding our Careers.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
