import logoImg from '/favicon1.png';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Saudex Global"
      className={className}
      draggable={false}
    />
  );
}

