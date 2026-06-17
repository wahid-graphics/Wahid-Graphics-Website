export default function SectionHeader({ eyebrow, title, subtitle, urduTitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-brand-yellow text-xs font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-5xl md:text-6xl text-brand-light tracking-widest leading-tight">
        {title}
      </h2>
      {urduTitle && (
        <p className="text-brand-yellow/70 text-lg mt-1" style={{ fontFamily: 'sans-serif' }}>
          {urduTitle}
        </p>
      )}
      {!center && <div className="w-16 h-[3px] bg-brand-yellow mt-4" />}
      {subtitle && (
        <p className="text-brand-light/60 mt-4 text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
