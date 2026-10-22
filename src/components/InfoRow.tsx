// Figma InfoRow (node 93:648)
// 라벨-값 한 줄. inline은 붙여서, spread는 양 끝 정렬.
type InfoRowProps = {
  label: string;
  value: string;
  type?: "inline" | "spread";
  className?: string;
};

export default function InfoRow({
  label,
  value,
  type = "inline",
  className = "",
}: InfoRowProps) {
  if (type === "spread") {
    return (
      <div className={`flex w-full items-center gap-10 ${className}`}>
        <span className="whitespace-nowrap text-body-md text-text-secondary">
          {label}
        </span>
        <span className="min-w-0 flex-1 break-words text-right text-label-md text-text-strong">
          {value}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-10 text-label-lg ${className}`}>
      <span className="whitespace-nowrap text-text-secondary">{label}</span>
      <span aria-hidden className="h-14 w-1 shrink-0 bg-border-default" />
      <span className="min-w-0 break-words text-text-strong">{value}</span>
    </div>
  );
}
