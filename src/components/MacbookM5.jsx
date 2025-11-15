import React from "react";

export default function MacbookM5() {
  const macbookImg =
    "https://9to5mac.com/wp-content/uploads/sites/6/2025/02/m5-macbook-pro.jpg";

  return (
    <section className="relative overflow-hidden bg-[#050505] py-16 sm:py-18 lg:py-20">
      {/* Subtle ambient glow kept refined */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-15 blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(246,227,180,0.14) 0%, rgba(246,227,180,0.06) 45%, rgba(246,227,180,0.02) 65%, transparent 75%)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/3 opacity-10 blur-xl"
          style={{
            background:
              "conic-gradient(from 200deg at 50% 50%, rgba(246,227,180,0.05), transparent 18%, rgba(246,227,180,0.06) 28%, transparent 48%, rgba(246,227,180,0.05) 60%, transparent 78%, rgba(246,227,180,0.05) 92%, transparent)",
            maskImage: "radial-gradient(closest-side, black, transparent)",
            WebkitMaskImage: "radial-gradient(closest-side, black, transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(246,227,180,0.10) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compact heading */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Every ASCA student receives a MacBook Pro powered by Apple M5.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/70 max-w-3xl mx-auto">
            A super‑premium learning experience built on Apple’s latest architecture—create, train, and ship with the same tools used by world‑class teams.
          </p>
        </div>

        {/* Visual focus: compact framed MacBook */}
        <div className="relative mx-auto mt-8 sm:mt-10 max-w-3xl lg:max-w-4xl">
          {/* Back glow behind the device (subtle) */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-[58%] blur-2xl opacity-35"
            style={{
              background:
                "radial-gradient(closest-side, rgba(246,227,180,0.24), rgba(246,227,180,0.10), transparent 70%)",
              filter: "drop-shadow(0 24px 80px rgba(246,227,180,0.22))",
            }}
          />

          {/* Central MacBook visual inside a minimal frame */}
          <div className="relative mx-auto w-full">
            {/* Outer glow rim (very soft) */}
            <div
              className="absolute -inset-4 -z-10 opacity-20 blur-xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(246,227,180,0.14), transparent 65%)",
              }}
            />

            {/* Frame with delicate gold stroke */}
            <div className="relative mx-auto w-full aspect-[16/10] rounded-[22px] p-[1px] bg-gradient-to-br from-[#F6E3B4]/25 via-white/10 to-transparent ring-1 ring-white/10 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.6)]">
              {/* Inner bezel */}
              <div className="relative h-full w-full overflow-hidden rounded-[21px] bg-[#0a0a0a] ring-1 ring-white/10 p-2.5 sm:p-3">
                {/* Camera bar + dot */}
                <div className="pointer-events-none absolute left-1/2 top-2.5 -translate-x-1/2 h-1 w-14 rounded-full bg-white/10" />
                <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white/20" />

                {/* Image */}
                <img
                  src={macbookImg}
                  alt="MacBook Pro with M5 chip"
                  className="h-full w-full object-contain"
                  style={{
                    filter: "contrast(1.02) saturate(1.02)",
                  }}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 720px"
                />

                {/* Glass glare */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_24%,transparent_42%)] mix-blend-screen" />

                {/* Subtle bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Minimal highlights */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <ul className="flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-5">
            {[
              "Apple‑class performance for AI, code, and creativity",
              "Studio‑grade battery life and thermals",
              "Yours to keep. From day one.",
            ].map((t) => (
              <li key={t} className="text-[13px] sm:text-sm text-white/80">
                <span className="text-[#F6E3B4]">•</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
