import React from "react";

export default function MacbookM5() {
  const macbookImg =
    "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28 sm:py-32 lg:py-40">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-10px) }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0.001deg); }
          50% { transform: translateY(-8px) translateX(4px) rotate(0.001deg); }
        }
      `}</style>

      {/* Deep ambient gold rays / glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[1600px] w-[1600px] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(246,227,180,0.22) 0%, rgba(246,227,180,0.08) 45%, rgba(246,227,180,0.03) 65%, transparent 75%)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-[1600px] w-[1600px] -translate-x-1/2 -translate-y-1/3 opacity-25 blur-2xl"
          style={{
            background:
              "conic-gradient(from 200deg at 50% 50%, rgba(246,227,180,0.06), transparent 18%, rgba(246,227,180,0.08) 28%, transparent 48%, rgba(246,227,180,0.07) 60%, transparent 78%, rgba(246,227,180,0.06) 92%, transparent)",
            maskImage: "radial-gradient(closest-side, black, transparent)",
            WebkitMaskImage: "radial-gradient(closest-side, black, transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(246,227,180,0.14) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Minimal Apple-like heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-block bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-[#F6E3B4] ring-1 ring-white/10 rounded-full">
            EVERY STUDENT. MACBOOK PRO. M5.
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-white">
            Performance you can carry.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/70">
            A super‑premium learning experience—built on the Apple M5 architecture. Create, train, and ship with the same tools used by world‑class teams.
          </p>
        </div>

        {/* Floating visuals */}
        <div className="relative mx-auto mt-16 sm:mt-20 max-w-6xl">
          {/* Back glow behind the device */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-[58%] blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(closest-side, rgba(246,227,180,0.38), rgba(246,227,180,0.12), transparent 70%)",
              filter: "drop-shadow(0 50px 140px rgba(246,227,180,0.35))",
            }}
          />

          {/* Apple logo floating */}
          <div
            className="absolute -left-6 sm:left-10 -top-6 sm:-top-2 opacity-90"
            style={{ animation: "floatSlow 10s ease-in-out infinite" }}
          >
            <AppleLogo className="h-12 w-12 sm:h-16 sm:w-16 text-[#F6E3B4] drop-shadow-[0_6px_30px_rgba(246,227,180,0.35)]" />
          </div>

          {/* M5 chip floating */}
          <div
            className="absolute right-2 sm:right-8 -top-2 sm:top-4"
            style={{ animation: "floatY 7s ease-in-out infinite" }}
          >
            <div className="relative grid place-items-center h-16 w-16 sm:h-20 sm:w-20 rounded-[14px] bg-gradient-to-br from-white/10 to-white/[0.05] ring-1 ring-white/20 backdrop-blur-[2px]">
              <div className="absolute inset-0 rounded-[14px] bg-gradient-to-tr from-[#F6E3B4]/20 to-transparent" />
              <span className="relative z-10 text-lg sm:text-xl font-semibold tracking-widest text-[#F6E3B4]">
                M5
              </span>
            </div>
          </div>

          {/* Central MacBook visual (no frame, no card) */}
          <div className="relative">
            <img
              src={macbookImg}
              alt="MacBook Pro with M5 chip"
              className="mx-auto block w-full max-w-5xl select-none rounded-none object-cover shadow-[0_80px_200px_-60px_rgba(0,0,0,0.9)]"
              style={{
                filter:
                  "drop-shadow(0 40px 120px rgba(246,227,180,0.25)) contrast(1.02)",
              }}
            />

            {/* Soft top reflection */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[40%] w-[120%] -translate-x-1/2 bg-gradient-to-b from-white/20 to-transparent" />
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

function AppleLogo({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 317"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M213.803 167.436c-.371-39.51 32.23-58.446 33.685-59.33-18.355-26.83-46.958-30.495-57.101-30.924-24.305-2.463-47.385 14.3-59.694 14.3-12.31 0-31.137-13.952-51.139-13.58-26.34.372-50.567 15.295-64.1 38.84-27.297 47.416-6.978 117.517 19.582 155.972 12.968 18.749 28.42 39.784 48.742 39.028 19.582-.743 27.003-12.64 50.732-12.64 23.73 0 30.37 12.64 51.14 12.268 21.12-.371 34.5-19.126 47.436-37.918 14.919-21.78 21.078-42.868 21.45-43.935-.448-.186-41.145-15.782-41.334-62.081zM174.225 54.39c10.86-13.183 18.185-31.47 16.165-49.71-15.64.62-34.58 10.4-45.78 23.583-10.04 11.58-18.82 30.05-16.46 47.74 17.45 1.36 35.21-8.87 46.07-21.612z" />
    </svg>
  );
}
