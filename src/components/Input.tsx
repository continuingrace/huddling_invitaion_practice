import type { ComponentProps } from "react";
import InputField from "@/components/InputField";
import Label from "@/components/Label";

// Figma Input (node 4:361)
// 라벨 + 한 줄 입력 박스 + 안내 문구. 일시·장소·이름처럼 한 줄 값에 쓴다.
type InputProps = ComponentProps<"input"> & {
  id: string;
  label: string;
  helper?: string;
};

export default function Input({
  id,
  label,
  helper,
  required,
  className = "",
  ...props
}: InputProps) {
  const helperId = `${id}-helper`;

  return (
    <div className={`flex w-full flex-col gap-6 ${className}`}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <InputField
        id={id}
        required={required}
        aria-describedby={helper ? helperId : undefined}
        {...props}
      />
      {helper && (
        <p id={helperId} className="text-caption-md text-text-tertiary">
          {helper}
        </p>
      )}
    </div>
  );
}
