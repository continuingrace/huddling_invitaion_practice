// Figma SectionHeader (node 5:668)
// 섹션 제목 묶음(subtitle · title · description). 필요 없는 줄은 값을 넘기지 않으면 숨겨진다.
// inverse는 어두운 배경(InvitationCover) 위에서 쓰는 흰 글자 버전.
type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  titleAs?: "h1" | "h2";
  inverse?: boolean;
  className?: string;
};

export default function SectionHeader({
  subtitle,
  title,
  description,
  titleAs: Title = "h2",
  inverse = false,
  className = "",
}: SectionHeaderProps) {
  return (
    // break-words: 띄어쓰기 없는 긴 글자도 폭 안에서 줄바꿈한다 (자식에게 이어진다)
    <div className={`flex w-full flex-col items-center gap-stack-md break-words text-center ${className}`}>
      {subtitle && (
        <p
          className={`w-full text-label-md ${inverse ? "text-text-inverse opacity-60" : "text-info-default"}`}
        >
          {subtitle}
        </p>
      )}
      {title && (
        // 입력한 줄바꿈을 그대로 보여준다 (제목 최대 2줄)
        <Title
          className={`w-full whitespace-pre-line text-title-lg ${inverse ? "text-text-inverse" : "text-text-primary"}`}
        >
          {title}
        </Title>
      )}
      {description && (
        <p
          className={`w-full whitespace-pre-line text-body-md ${inverse ? "text-text-inverse" : "text-text-primary"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
