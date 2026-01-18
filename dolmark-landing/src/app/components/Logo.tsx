export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/favicon1.png"
      alt="Saudex Global"
      className={className}
      draggable={false}
    />
  );
}

