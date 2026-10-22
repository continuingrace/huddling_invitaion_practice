import type { ReactNode } from "react";
import Icon from "@/components/Icon";

// Figma NavBar (node 85:1904)
// 화면 상단 바. 가운데 title, 양옆 left/right는 아이콘 자리(없으면 빈 칸).
type NavBarProps = {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
};

export default function NavBar({ title, left, right, className = "" }: NavBarProps) {
  return (
    <header className={`flex w-full items-center gap-32 p-20 ${className}`}>
      {left ?? <Icon name="none" />}
      <p className="min-w-0 flex-1 text-center text-heading-md text-text-primary">
        {title}
      </p>
      {right ?? <Icon name="none" />}
    </header>
  );
}
