"use client";

import { useState } from "react";
import StepButton from "@/components/StepButton";

// Figma Stepper (node 94:719)
// 동반 인원 입력. 최솟값이면 줄이기 버튼이 비활성으로 바뀐다.
// name을 주면 form 제출 때 숫자 값이 함께 전송된다.
type StepperProps = {
  name?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  unit?: string;
  onChange?: (value: number) => void;
  className?: string;
};

export default function Stepper({
  name,
  defaultValue = 0,
  min = 0,
  max,
  unit = "명",
  onChange,
  className = "",
}: StepperProps) {
  const [value, setValue] = useState(defaultValue);

  function change(next: number) {
    setValue(next);
    onChange?.(next);
  }

  return (
    <div className={`flex items-center gap-12 ${className}`}>
      <StepButton
        icon="minus"
        aria-label="줄이기"
        disabled={value <= min}
        onClick={() => change(value - 1)}
      />
      <span aria-live="polite" className="whitespace-nowrap text-heading-md text-text-strong">
        {value}
        {unit}
      </span>
      <StepButton
        icon="plus"
        aria-label="늘리기"
        disabled={max !== undefined && value >= max}
        onClick={() => change(value + 1)}
      />
      {name && <input type="hidden" name={name} value={value} />}
    </div>
  );
}
