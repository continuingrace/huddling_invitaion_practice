import Image from "@/components/Image";
import SectionHeader from "@/components/SectionHeader";

// Figma InvitationCover (node 91:599)
// 초대장 상단 커버. /create 미리보기와 /i/[id]에서 같은 컴포넌트를 쓴다.
type InvitationCoverProps = {
  subtitle?: string;
  title: string;
  date: string;
  location: string;
  className?: string;
};

export default function InvitationCover({
  subtitle,
  title,
  date,
  location,
  className = "",
}: InvitationCoverProps) {
  return (
    <section
      className={`flex w-full flex-col items-center gap-20 overflow-hidden bg-linear-to-b from-neutral-950 to-neutral-600 px-page-horizontal py-80 ${className}`}
    >
      <SectionHeader subtitle={subtitle} title={title} titleAs="h1" inverse />
      <Image type="1" alt="" />
      <CoverDetail label="일시" value={date} />
      <CoverDetail label="장소" value={location} />
    </section>
  );
}

// 일시·장소 한 묶음: 작은 이름표 + 값
function CoverDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-8 text-center">
      <span className="rounded-8 bg-info-subtle px-6 py-2 text-caption-md text-info-strong">
        {label}
      </span>
      <p className="w-full whitespace-pre-line break-words text-label-md text-text-inverse">{value}</p>
    </div>
  );
}
