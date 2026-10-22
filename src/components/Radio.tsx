import type { ComponentProps } from "react";

// Figma Radio (node 4:157)
// 진짜 라디오 입력을 투명하게 깔고 모양만 그린다.
// 선택(checked)·비활성(disabled)에 따라 모양이 자동으로 바뀐다.
type RadioProps = Omit<ComponentProps<"input">, "type">;

export default function Radio({ className = "", ...props }: RadioProps) {
  return (
    <span
      className={`relative inline-flex size-48 shrink-0 items-center justify-center ${className}`}
    >
      <input
        type="radio"
        className="peer absolute inset-0 m-0 cursor-pointer appearance-none opacity-0 disabled:cursor-default"
        {...props}
      />
      {/* 바깥 원(outer)과 흰 점(dot). 선택되면 점이 작아진다. */}
      <span className="pointer-events-none flex size-20 items-center justify-center rounded-pill bg-border-strong peer-checked:bg-action-primary peer-checked:*:size-8 peer-disabled:bg-text-disabled peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-action-primary">
        <span className="size-16 rounded-pill bg-surface-default" />
      </span>
    </span>
  );
}
