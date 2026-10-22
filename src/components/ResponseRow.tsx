import AttendanceBadge from "@/components/AttendanceBadge";

// Figma ResponseRow (node 56:324)
// 응답 현황 목록 한 줄. 불참이면 meta에 동반 인원을 넣지 않는다.
type ResponseRowProps = {
  name: string;
  meta?: string;
  status: "yes" | "no";
  className?: string;
};

export default function ResponseRow({
  name,
  meta,
  status,
  className = "",
}: ResponseRowProps) {
  return (
    <div
      className={`flex w-full items-center gap-12 rounded-card border border-border-subtle bg-surface-default p-16 ${className}`}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <p className="truncate text-label-lg text-text-primary">{name}</p>
        {meta && (
          <p className="truncate text-caption-md text-text-tertiary">{meta}</p>
        )}
      </div>
      <AttendanceBadge status={status} className="shrink-0" />
    </div>
  );
}
