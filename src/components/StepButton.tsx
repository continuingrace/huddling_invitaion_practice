import NextImage from "next/image";
import type { ComponentProps } from "react";
import Icon from "@/components/Icon";

// Figma StepButton (node 87:2160)
// Stepper의 −/+ 버튼. 더 못 줄이면 disabled를 준다.
// 화면 읽기 프로그램용으로 aria-label("인원 줄이기" 등)을 꼭 넘긴다.
type StepButtonProps = Omit<ComponentProps<"button">, "children"> & {
  icon: "minus" | "plus";
  "aria-label": string;
};

export default function StepButton({
  icon,
  disabled,
  type = "button",
  className = "",
  ...props
}: StepButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`flex size-44 shrink-0 items-center justify-center rounded-control border border-border-default bg-surface-default disabled:cursor-default ${className}`}
      {...props}
    >
      {/* 비활성 minus는 Figma에서 연회색(text-disabled) 버전이라 별도 파일을 쓴다 */}
      {disabled && icon === "minus" ? (
        <NextImage src="/icons/minus-disabled.svg" alt="" width={20} height={20} />
      ) : (
        <Icon name={icon} size={20} />
      )}
    </button>
  );
}
