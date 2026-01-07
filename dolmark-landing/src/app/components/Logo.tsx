export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Dolmark arrow logo"
    >
      <polygon
        points="20,180 120,40 170,40 70,180"
        fill="#0F4C5C"
      />
      <polygon
        points="70,180 170,40 220,40 120,180"
        fill="#00B3A4"
      />
      <polygon
        points="120,180 220,40 256,40 170,180"
        fill="#6EE7DB"
      />
    </svg>
  );
}
