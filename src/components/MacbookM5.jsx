import React from "react";

export default function MacbookM5() {
  const macbookImg =
    "https://9to5mac.com/wp-content/uploads/sites/6/2025/02/m5-macbook-pro.jpg";

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 sm:py-32 lg:py-40">
      {/* Deep ambient gold rays / glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h:[1600px] w-[1600px] -translate-x-1/2 -translate-y-1/2 opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(246,227,180,0.18) 0%, rgba(246,227,180,0.08) 45%, rgba(246,227,180,0.03) 65%, transparent 75%)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-[1600px] w-[1600px] -translate-x-1/2 -translate-y-1/3 opacity-20 blur-2xl"
          style={{
            background:
              "conic-gradient(from 200deg at 50% 50%, rgba(246,227,180,0.06), transparent 18%, rgba(246,227,180,0.08) 28%, transparent 48%, rgba(246,227,180,0.07) 60%, transparent 78%, rgba(246,227,180,0.06) 92%, transparent)",
            maskImage: "radial-gradient(closest-side, black, transparent)",
            WebkitMaskImage: "radial-gradient(closest-side, black, transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(246,227,180,0.12) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Standard heading pattern (matching Campus Life) */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Every ASCA student receives a MacBook Pro powered by Apple M5.
          </h2>
          <p className="mt-3 text-white/70">
            A super‑premium learning experience—built on the Apple M5 architecture. Create, train, and ship with the same tools used by world‑class teams.
          </p>
        </div>

        {/* Visual focus: framed MacBook */}
        <div className="relative mx-auto mt-12 sm:mt-16 max-w-4xl lg:max-w-5xl">
          {/* Back glow behind the device */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-[58%] blur-3xl opacity-55"
            style={{
              background:
                "radial-gradient(closest-side, rgba(246,227,180,0.32), rgba(246,227,180,0.12), transparent 70%)",
              filter: "drop-shadow(0 40px 120px rgba(246,227,180,0.28))",
            }}
          />

          {/* Central MacBook visual inside a premium frame */}
          <div className="relative mx-auto w-full">
            {/* Outer glow rim */}
            <div
              className="absolute -inset-6 -z-10 opacity-30 blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(246,227,180,0.18), transparent 65%)",
              }}
            />

            {/* Frame with subtle gold stroke */}
            <div className="relative mx-auto w-full aspect-[16/10] rounded-[28px] p-[1px] bg-gradient-to-br from-[#F6E3B4]/30 via-white/10 to-transparent ring-1 ring-white/10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]">
              {/* Inner bezel */}
              <div className="relative h-full w-full overflow-hidden rounded-[27px] bg-[#0a0a0a] ring-1 ring-white/10 p-3 sm:p-4">
                {/* Camera bar + dot */}
                <div className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 h-1.5 w-16 rounded-full bg-white/10" />
                <div className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 h-2 w-2 rounded-full bg-white/20" />

                {/* Image */}
                <img
                  src={macbookImg}
                  alt="MacBook Pro with M5 chip"
                  className="h-full w-full object-contain"
                  style={{
                    filter: "contrast(1.03) saturate(1.02)",
                  }}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
                />

                {/* Glass glare */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_24%,transparent_40%)] mix-blend-screen" />

                {/* Subtle bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Minimal highlights */}
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <ul className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            {[
              "Apple‑class performance for AI, code, and creativity",
              "Studio‑grade battery life and thermals",
              "Yours to keep. From day one.",
            ].map((t) => (
              <li key={t} className="text-sm sm:text-base text-white/80">
                <span className="text-[#F6E3B4]">•</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
