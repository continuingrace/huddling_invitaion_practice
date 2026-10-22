import type { ComponentProps } from "react";
import Label from "@/components/Label";
import Radio from "@/components/Radio";

// Figma RadioOption (node 4:394)
// 라디오 + 라벨 한 줄. 참석/불참 선택에 쓴다. 라벨을 눌러도 선택된다.
type RadioOptionProps = Omit<ComponentProps<"input">, "type"> & {
  id: string;
  label: string;
};

export default function RadioOption({
  id,
  label,
  className = "",
  ...props
}: RadioOptionProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Radio id={id} {...props} />
      <Label htmlFor={id} className="cursor-pointer">
        {label}
      </Label>
    </div>
  );
}
