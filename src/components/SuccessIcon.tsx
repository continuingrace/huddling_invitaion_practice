import NextImage from "next/image";

// Figma SuccessIcon (node 87:2061)
// 완료 표시 아이콘. 발행 완료·참석 신청 완료 상태에서 쓴다.
// 안의 체크는 Figma에서 진한 파랑(info-strong) 32px 버전이라 별도 파일을 쓴다.
export default function SuccessIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex size-64 shrink-0 items-center justify-center rounded-full bg-info-subtle ${className}`}
    >
      <NextImage src="/icons/check-success.svg" alt="" width={32} height={32} />
    </span>
  );
}
