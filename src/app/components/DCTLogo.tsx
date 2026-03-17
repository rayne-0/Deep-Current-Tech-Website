interface DCTLogoProps {
  height?: number;
  className?: string;
}

/**
 * Inline SVG recreation of the DCT logo.
 * Bold italic "DCT" wordmark with a node-graph mark in the top-right.
 * Renders crisp at any size. Color adapts to `currentColor` for text,
 * and uses --accent (cyan) for the network mark.
 */
export default function DCTLogo({ height = 32, className }: DCTLogoProps) {
  const w = height * 3.1; // maintain aspect ratio

  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 248 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Deepcurrent Tech"
    >
      {/* ── "DCT" wordmark ───────────────────────────── */}
      <text
        x="0"
        y="72"
        fontFamily="'Outfit', 'Inter', sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="78"
        letterSpacing="-2"
        fill="white"
      >
        DCT
      </text>

      {/* ── Network / node graph mark ────────────────── */}
      {/* Lines first (behind the dots) */}
      <line x1="194" y1="12" x2="216" y2="24" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="216" y1="24" x2="232" y2="10" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="216" y1="24" x2="208" y2="36" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />

      {/* Dots */}
      <circle cx="194" cy="12" r="4.5" fill="#22d3ee" />
      <circle cx="216" cy="24" r="3.5" fill="#22d3ee" />
      <circle cx="232" cy="10" r="7"   fill="#22d3ee" />
      <circle cx="208" cy="36" r="3.5" fill="#22d3ee" />
    </svg>
  );
}
