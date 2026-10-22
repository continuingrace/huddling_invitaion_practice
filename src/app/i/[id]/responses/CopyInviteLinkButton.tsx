"use client";

import { useState } from "react";
import Button from "@/components/Button";

// 응답 현황 화면 아래의 "초대장 링크 복사하기" 버튼
export default function CopyInviteLinkButton({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/i/${id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 복사가 막힌 환경(https가 아닌 주소 등)에서는 아무것도 하지 않는다
    }
  }

  return (
    <Button size="lg" className="w-full" onClick={copy}>
      {copied ? "링크를 복사했어요" : "초대장 링크 복사하기"}
    </Button>
  );
}
