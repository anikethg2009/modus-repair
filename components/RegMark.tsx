// Printer's registration mark. Decorative; use sparingly.
export default function RegMark({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <circle cx="10" cy="10" r="5.5" />
      <path d="M10 0v20M0 10h20" />
    </svg>
  );
}
