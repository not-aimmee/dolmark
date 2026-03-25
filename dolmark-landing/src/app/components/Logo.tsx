
import logo1 from '/favicon1.png';
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo1}
      alt="Saudex Global"
      className={className}
      draggable={false}
    />
  );
}

