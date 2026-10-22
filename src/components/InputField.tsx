import type { ComponentProps } from "react";

// Figma InputField (node 4:331)
// 한 줄 입력 박스. 빈 칸·입력 중(focus)·값 채움 상태는 브라우저가 알아서 바꾼다.
type InputFieldProps = ComponentProps<"input">;

export default function InputField({
  type = "text",
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <input
      type={type}
      // 테두리는 Figma처럼 안쪽에 그린다(ring-inset). 바깥 border는 높이를 2px 키운다.
      className={`w-full rounded-control bg-surface-default px-16 py-12 text-body-lg text-text-primary outline-none ring-1 ring-inset ring-border-subtle placeholder:text-text-disabled focus:ring-action-primary ${className}`}
      {...props}
    />
  );
}
