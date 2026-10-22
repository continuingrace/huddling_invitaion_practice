import type { ComponentProps } from "react";

// Figma Button (node 10:2355)
// hover는 마우스를 올리면, disabled는 disabled 속성을 주면 자동으로 바뀐다.
// hover: 원래 배경색 위에 반투명 파랑(action-hover-overlay)을 한 겹 덮는다.
type ButtonProps = ComponentProps<"button"> & {
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "gap-10 py-4 text-label-md bg-action-primary",
  md: "h-48 gap-6 py-12 text-label-md bg-text-secondary",
  lg: "h-52 gap-10 py-4 text-label-lg bg-action-primary",
};

export default function Button({
  size = "sm",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-control px-8 text-text-inverse enabled:hover:bg-linear-to-r enabled:hover:from-action-hover-overlay enabled:hover:to-action-hover-overlay disabled:bg-border-subtle ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
