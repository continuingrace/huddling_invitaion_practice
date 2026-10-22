// Figma EmptyState (node 99:696)
// 목록이 비었을 때 보여주는 안내. 예: 응답 현황 0건.
type EmptyStateProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function EmptyState({
  title,
  description,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-8 rounded-card bg-surface-subtle px-20 py-40 text-center ${className}`}
    >
      <p className="text-heading-md text-text-strong">{title}</p>
      {description && (
        <p className="text-body-md text-text-tertiary">{description}</p>
      )}
    </div>
  );
}
