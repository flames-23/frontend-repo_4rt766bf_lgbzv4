import React from 'react'
import SectionHeading from './SectionHeading'

const mediaClasses = 'w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl object-cover ring-1 ring-black/5'

function USPCard({ reverse = false, media, title, desc, extra }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-black/5 ring-1 ring-black/5 overflow-hidden">
      <div className={`grid grid-cols-1 md:grid-cols-2 ${reverse ? 'md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1' : ''}`}>
        <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
          {media}
        </div>
        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">{title}</h3>
          {desc ? <p className="mt-3 text-slate-600 text-base sm:text-lg">{desc}</p> : null}
          {extra}
        </div>
      </div>
    </div>
  )
}

export default function USPs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="This is built different"
          align="left"
          theme="light"
          size="lg"
          className="mb-8 sm:mb-10 lg:mb-12"
        />

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
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
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop"
                    alt="Student"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop"
                    alt="Mentor"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  />
                </div>
                <span className="text-sm text-slate-600">Student + Mentor guidance abroad</span>
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
