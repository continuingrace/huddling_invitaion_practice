"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";
import InputField from "@/components/InputField";

// Figma CopyLinkField (node 91:678)
// 발행 후 공유할 링크 한 줄. 초대장 링크와 응답 현황 링크에 두 번 쓴다.
type CopyLinkFieldProps = {
  title: string;
  url: string;
  description?: string;
  className?: string;
};

export default function CopyLinkField({
  title,
  url,
  description,
  className = "",
}: CopyLinkFieldProps) {
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 복사가 막힌 환경이면 링크 글자를 선택해 둬서 직접 복사할 수 있게 한다
      inputRef.current?.select();
    }
  }

  return (
    <div
      className={`flex w-full flex-col gap-8 rounded-card bg-surface-subtle p-16 ${className}`}
    >
      <p className="text-label-lg text-text-strong">{title}</p>
      <div className="flex w-full items-center gap-8">
        <InputField
          ref={inputRef}
          readOnly
          value={url}
          aria-label={title}
          className="min-w-0 flex-1"
          onFocus={(e) => e.currentTarget.select()}
        />
        <Button size="sm" onClick={copy}>
          {copied ? "복사됨" : "복사"}
        </Button>
      </div>
      {description && (
        <p className="text-caption-md text-text-tertiary">{description}</p>
      )}
    </div>
  );
}
