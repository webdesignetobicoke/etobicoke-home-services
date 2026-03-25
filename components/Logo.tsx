interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  dark?: boolean
}

export default function Logo({ size = 'md', dark = false }: LogoProps) {
  const dims = { sm: 40, md: 52, lg: 68 }[size]

  return (
    <svg
      viewBox="0 0 60 60"
      width={dims}
      height={dims}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Etobicoke Home Services logo"
    >
      {/* Outer ring */}
      <circle cx="30" cy="30" r="28.5" fill="#0E1C35" stroke="#C4933F" strokeWidth="1.5" />

      {/* House — roof */}
      <polyline
        points="11,29 30,13 49,29"
        stroke="#C4933F"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* House — walls */}
      <rect x="16" y="28" width="28" height="18" stroke="#C4933F" strokeWidth="2" />

      {/* Door */}
      <rect x="24.5" y="36" width="11" height="10" stroke="#C4933F" strokeWidth="1.8" fill="#C4933F" fillOpacity="0.18" />

      {/* Left window */}
      <rect x="18.5" y="32" width="7" height="6" stroke="#C4933F" strokeWidth="1.5" fill="#C4933F" fillOpacity="0.10" />

      {/* Right window */}
      <rect x="34.5" y="32" width="7" height="6" stroke="#C4933F" strokeWidth="1.5" fill="#C4933F" fillOpacity="0.10" />

      {/* Chimney */}
      <rect x="37" y="16" width="5" height="13" stroke="#C4933F" strokeWidth="1.8" fill="#0E1C35" />
    </svg>
  )
}
