import type { ComponentProps } from "react";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";

// Figma Textarea (node 102:733)
// 여러 줄 입력. rows=2는 제목(최대 2줄), rows=4는 본문.
type TextareaProps = Omit<ComponentProps<"textarea">, "rows"> & {
  id: string;
  label: string;
  rows?: 2 | 4;
  helper?: string;
};

export default function Textarea({
  id,
  label,
  rows = 4,
  helper,
  required,
  className = "",
  ...props
}: TextareaProps) {
  const helperId = `${id}-helper`;

  return (
    <div className={`flex w-full flex-col gap-6 ${className}`}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <TextareaField
        id={id}
        rows={rows}
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
