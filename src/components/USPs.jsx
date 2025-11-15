import React from 'react'
import SectionHeading from './SectionHeading'

const mediaClasses = 'w-full h-44 sm:h-52 md:h-56 lg:h-64 rounded-xl object-cover ring-1 ring-black/5'

function USPCard({ reverse = false, media, title, desc, extra }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className={`grid grid-cols-1 md:grid-cols-2 ${reverse ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1' : ''}`}>
        <div className="p-3 sm:p-4 md:p-5 flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
          {media}
        </div>
        <div className="p-5 sm:p-6 md:p-7 flex flex-col items-center justify-center text-center">
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-black">{title}</h3>
          {desc ? <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">{desc}</p> : null}
          {extra}
        </div>
      </div>
    </div>
  )
}

export default function USPs() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="This is built different"
          subtitle="Hands-on, industry-backed learning from day one."
          align="center"
          theme="light"
          size="md"
          className="mb-6 sm:mb-8 lg:mb-10"
        />

        <div className="mx-auto max-w-5xl space-y-4 sm:space-y-6 lg:space-y-8">
          {/* 1. Travel Abroad in Year 1 */}
          <USPCard
            reverse={false}
            title="Travel Abroad in Year 1"
            desc="Kickstart your global journey with an international research internship in your very first year."
            media={
              <video
                className={mediaClasses}
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop"
              >
                <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_24fps.mp4" type="video/mp4" />
              </video>
            }
            extra={
              <div className="mt-4 flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    alt="Student"
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop"
                    alt="Mentor"
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  />
                </div>
                <span className="text-xs sm:text-sm text-slate-600">Student + Mentor guidance abroad</span>
              </div>
            }
          />

          {/* 2. Graduate With 1.5 Years of Experience */}
          <USPCard
            reverse
            title="Graduate With 1.5 Years of Experience"
            desc="Real projects. Real impact. A head start on Day 1."
            media={
              <video
                className={mediaClasses}
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
              >
                <source src="https://videos.pexels.com/video-files/855582/855582-hd_1920_1080_25fps.mp4" type="video/mp4" />
              </video>
            }
          />

          {/* 3. Final Year = No Classes, Only Real Engineering Work */}
          <USPCard
            reverse={false}
            title="Final Year = No Classes, Only Real Engineering Work"
            desc="Work-integrated learning with industry-grade deliverables."
            media={
              <video
                className={mediaClasses}
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
              >
                <source src="https://videos.pexels.com/video-files/3184297/3184297-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              </video>
            }
          />

          {/* 4. Learning by Doing (Doctor Analogy) */}
          <USPCard
            reverse
            title="Learning by Doing (Doctor Analogy)"
            desc="Engineers learn best like doctors: hands-on, mentored, and in real environments."
            media={
              <video
                className={mediaClasses}
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1600&auto=format&fit=crop"
              >
                <source src="https://videos.pexels.com/video-files/7578551/7578551-uhd_2732_1440_25fps.mp4" type="video/mp4" />
              </video>
            }
          />
        </div>
      </div>
    </section>
  )
}
