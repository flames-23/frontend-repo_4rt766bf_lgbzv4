import React from 'react'

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SectionHeading({
  title,
  subtitle,
  kicker,
  align = 'left', // 'left' | 'center'
  theme = 'light', // 'light' | 'dark'
  size = 'lg', // 'md' | 'lg'
  className
}) {
  const isDark = theme === 'dark'

  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  const titleSizes = size === 'lg' ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-3xl sm:text-4xl'

  // Enforce pure white on dark backgrounds and pure black on light backgrounds
  const titleColor = isDark ? 'text-white' : 'text-black'
  const subtitleColor = isDark ? 'text-[#A9A9B2]' : 'text-[#4B5563]'

  return (
    <div className={cx(alignClass, className)}>
      {kicker ? (
        <div className={cx(
          'mb-2 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1',
          isDark ? 'text-white ring-white/10 bg-white/5' : 'text-black ring-slate-200 bg-white'
        )}>
          {kicker}
        </div>
      ) : null}

      {title ? (
        <h2 className={cx(titleSizes, 'font-extrabold tracking-tight', titleColor)}>{title}</h2>
      ) : null}

      {subtitle ? (
        <p className={cx('mt-3 text-base sm:text-lg', subtitleColor)}>{subtitle}</p>
      ) : null}
    </div>
  )
}
