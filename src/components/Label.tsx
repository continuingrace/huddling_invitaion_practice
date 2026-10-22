import type { ComponentProps } from "react";

// Figma Label (node 4:353)
// 입력 필드 위 라벨. required를 켜면 "필수" 표시가 붙는다.
type LabelProps = ComponentProps<"label"> & {
  required?: boolean;
};

export default function Label({
  required = false,
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={`flex items-center gap-4 whitespace-nowrap ${className}`}
      {...props}
    >
      <span className="text-label-lg text-text-strong">{children}</span>
      {required && (
        <span className="text-caption-md text-feedback-error">필수</span>
      )}
    </label>
  );
}
