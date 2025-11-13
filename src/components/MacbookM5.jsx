import { CheckCircle2, Sparkles } from "lucide-react";

export default function MacbookM5() {
  const imageUrl =
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32 bg-[#050505]">
      {/* Ambient luxe lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{
          background:
            "radial-gradient(closest-side, rgba(246,227,180,0.18), rgba(246,227,180,0.08), transparent 70%)",
        }} />
        <div className="absolute top-0 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/3 opacity-20 blur-2xl" style={{
          background:
            "conic-gradient(from 210deg at 50% 50%, rgba(246,227,180,0.08), transparent 25%, rgba(246,227,180,0.1) 40%, transparent 60%, rgba(246,227,180,0.08) 80%, transparent)",
          maskImage: "radial-gradient(closest-side, black, transparent)",
          WebkitMaskImage: "radial-gradient(closest-side, black, transparent)",
        }} />
        {/* faint particles */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage:
            "radial-gradient(rgba(246,227,180,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          backgroundPosition: "0 0, 11px 11px",
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
            <Sparkles className="h-4 w-4 text-[#F6E3B4]" />
            <span className="text-xs font-semibold tracking-wider text-[#F6E3B4]">PREMIUM HARDWARE</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Keep Your Lab With You — Powered by Apple M5.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            Every student receives a MacBook Pro to build, code, design, and explore AI from anywhere.
          </p>
        </div>

        {/* Main visual */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="relative mx-auto max-w-5xl">
            {/* back glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40" style={{
              background:
                "radial-gradient(closest-side, rgba(246,227,180,0.35), rgba(246,227,180,0.15), transparent 70%)",
              filter: "drop-shadow(0 40px 120px rgba(246,227,180,0.25))",
            }} />

            {/* image placeholder */}
            <div className="relative rounded-[28px] ring-1 ring-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-2 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.8)]">
              <div className="rounded-[22px] overflow-hidden bg-[#0A0A0A]">
                <img
                  src={imageUrl}
                  alt="MacBook Pro placeholder"
                  className="w-full aspect-[16/9] object-cover opacity-95"
                />
                {/* subtle top reflection */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-1/3 w-[120%] -translate-x-1/2 bg-gradient-to-b from-white/20 to-transparent" />
              </div>
              {/* soft rim light */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />
            </div>
          </div>
        </div>

        {/* Supporting bullets */}
        <div className="mx-auto mt-10 sm:mt-12 max-w-4xl">
          <ul className="grid sm:grid-cols-3 gap-4">
            {[
              "Powerful Apple M5 chip for AI/ML workloads",
              "Industry-grade performance for coding, projects & research",
              "Carry your entire engineering lab with you",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/[0.04] px-4 py-3 ring-1 ring-white/10">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F6E3B4]" />
                <span className="text-sm sm:text-[15px] leading-6 text-white/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
