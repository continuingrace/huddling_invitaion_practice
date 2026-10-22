// Figma StatCard (node 91:668)
// 응답 현황 숫자 카드. highlight는 강조할 합계(참석 인원 합계)에만 쓴다.
type StatCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
};

export default function StatCard({
  label,
  value,
  highlight = false,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-card px-12 py-16 ${highlight ? "bg-info-subtle" : "bg-surface-subtle"} ${className}`}
    >
      <p className="text-caption-md text-text-secondary">{label}</p>
      <p
        className={`text-title-lg ${highlight ? "text-info-strong" : "text-text-strong"}`}
      >
        {value}
      </p>
    </div>
  );
}
