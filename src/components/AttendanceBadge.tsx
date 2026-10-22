// Figma AttendanceBadge (node 56:323)
// 참석 여부 배지. status는 DB rsvps.status 값(yes/no)과 맞춘다.
type AttendanceBadgeProps = {
  status: "yes" | "no";
  className?: string;
};

const statusStyles = {
  yes: { label: "참석", classes: "bg-info-subtle text-info-strong" },
  no: { label: "불참", classes: "bg-background-subtle text-text-secondary" },
};

export default function AttendanceBadge({
  status,
  className = "",
}: AttendanceBadgeProps) {
  const { label, classes } = statusStyles[status];

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-pill px-10 py-4 text-label-md ${classes} ${className}`}
    >
      {label}
    </span>
  );
}
