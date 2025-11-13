export default function SectionTransition({ size = 'md', variant = 'dark-to-light' }) {
  const sizeMap = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  }
  const heightClass = sizeMap[size] || sizeMap.md

  const variantClass =
    variant === 'light-to-dark'
      ? 'transition-light-to-dark'
      : 'transition-dark-to-light'

  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden ${heightClass}`}
    >
      <div className={`absolute inset-0 ${variantClass}`} />
      {/* Decorative premium ribbons for subtle motion */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="absolute left-1/3 top-0 h-px w-1/2 ribbon-blue blur-[2px]" />
        <div className="absolute right-1/4 bottom-0 h-px w-2/5 ribbon-violet blur-[2px]" />
      </div>
    </div>
  )
}
