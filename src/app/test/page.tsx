import AttendanceBadge from "@/components/AttendanceBadge";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import EmptyState from "@/components/EmptyState";
import Icon from "@/components/Icon";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InputField from "@/components/InputField";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import Radio from "@/components/Radio";
import RadioOption from "@/components/RadioOption";
import ResponseRow from "@/components/ResponseRow";
import RSVPCard from "@/components/RSVPCard";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import StepButton from "@/components/StepButton";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";
import TextareaField from "@/components/TextareaField";

// /test : 컴포넌트 확인 화면. 변형 모음 (hover는 마우스를 올려서 확인)
const sizes = ["sm", "md", "lg"] as const;
const iconNames = ["check", "plus", "minus", "none"] as const;

export default function TestPage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-col gap-section px-page-horizontal py-section">
      <h1 className="text-heading-lg text-text-primary">컴포넌트 확인</h1>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">Icon</h2>
        <div className="flex items-end gap-stack-md">
          {iconNames.map((name) => (
            <div key={name} className="flex flex-col items-center gap-inline-md">
              {/* none은 빈 자리라 테두리로 위치만 표시 */}
              <Icon name={name} className="outline outline-border-default" />
              <span className="text-caption-md text-text-secondary">{name}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-inline-md">
            <Icon name="minus" size={20} />
            <span className="text-caption-md text-text-secondary">20</span>
          </div>
          <div className="flex flex-col items-center gap-inline-md">
            <Icon name="check" size={32} />
            <span className="text-caption-md text-text-secondary">32</span>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">Label</h2>
        <div className="flex items-center gap-stack-md">
          <Label>Label</Label>
          <Label required>Label</Label>
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">AttendanceBadge</h2>
        <div className="flex items-center gap-stack-md">
          <AttendanceBadge status="yes" />
          <AttendanceBadge status="no" />
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">Radio</h2>
        <div className="flex items-center gap-stack-md">
          {/* 같은 name끼리는 하나만 선택된다. 눌러서 바뀌는지도 확인 */}
          <Radio name="radio-preview" aria-label="기본" />
          <Radio name="radio-preview" aria-label="선택" defaultChecked />
          <Radio name="radio-preview" aria-label="비활성" disabled />
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">InfoRow</h2>
        <InfoRow label="일시" value="2026년 11월 14일 (토) 09:00" />
        <InfoRow type="spread" label="일시" value="2026년 11월 14일 (토) 09:00" />
        {/* 긴 값은 줄바꿈되는지 확인 */}
        <InfoRow label="장소" value="서울특별시 강남구 테헤란로 123, 허들링빌딩 15층 대회의실" />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">InputField</h2>
        {/* 첫 칸을 눌러 입력하면 테두리가 파랗게 바뀌는지 확인 */}
        <InputField aria-label="빈 칸" placeholder="placeholder" />
        <InputField aria-label="값 채움" placeholder="placeholder" defaultValue="홍길동" />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">TextareaField</h2>
        <TextareaField aria-label="rows 4" placeholder="게스트에게 전할 초대 글을 적어주세요" />
        <TextareaField
          aria-label="rows 2"
          rows={2}
          placeholder="게스트에게 전할 초대 글을 적어주세요"
          defaultValue="게스트에게 전할 초대 글을 적어주세요"
        />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">SectionHeader</h2>
        <SectionHeader subtitle="Subtitle" title="title" description="Description" />
        <SectionHeader title="제목만 있을 때" />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">EmptyState</h2>
        <EmptyState
          title="아직 응답이 없어요"
          description="초대장 링크를 공유하면 응답이 여기에 쌓여요."
        />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">StatCard</h2>
        <div className="flex gap-stack-sm">
          <StatCard label="참석" value="2명" className="flex-1" />
          <StatCard label="불참" value="1명" className="flex-1" />
          <StatCard label="참석 인원 합계" value="5명" highlight className="flex-1" />
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">Image</h2>
        <div className="flex items-end gap-stack-md">
          <Image type="1" alt="" />
          <Image type="2" alt="" />
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">SuccessIcon</h2>
        <SuccessIcon />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">StepButton</h2>
        <div className="flex gap-stack-md">
          <StepButton icon="minus" aria-label="줄이기" />
          <StepButton icon="minus" aria-label="줄이기 (비활성)" disabled />
          <StepButton icon="plus" aria-label="늘리기" />
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">NavBar</h2>
        <NavBar title="Label" className="outline outline-border-default" />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">ResponseRow</h2>
        <ResponseRow name="김허들" meta="동반 1명" status="yes" />
        <ResponseRow name="이불참" status="no" />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">Stepper</h2>
        {/* 0명이면 − 버튼이 비활성으로 바뀌는지 확인 */}
        <Stepper defaultValue={1} />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">RadioOption</h2>
        <div className="flex">
          <RadioOption id="preview-yes" name="preview-status" label="참석" className="flex-1" />
          <RadioOption id="preview-no" name="preview-status" label="불참" className="flex-1" />
        </div>
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">Input</h2>
        <Input id="preview-input" label="이름" required placeholder="이름을 입력해주세요" />
        <Input id="preview-input-helper" label="장소" placeholder="주소를 입력해주세요" helper="안내 문구" />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">Textarea</h2>
        <Textarea id="preview-title" label="제목" rows={2} required placeholder="초대장 제목" />
        <Textarea
          id="preview-body"
          label="본문"
          placeholder="게스트에게 전할 초대 글을 적어주세요"
          helper="엔터로 줄을 나눌 수 있어요"
        />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">CopyLinkField</h2>
        <CopyLinkField
          title="초대장 링크"
          url="http://localhost:3000/i/k3f9x2a7"
          description="게스트에게 공유하는 링크예요."
        />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">InvitationCover</h2>
        <InvitationCover
          className="-mx-page-horizontal w-auto"
          subtitle="Huddling Club 2nd Meetup"
          title={"허들링 클럽 2번째\n오프라인 밋업"}
          date="2026년 11월 14일 (토) 09:00"
          location="세종 남극 기지"
        />
      </section>

      <section className="flex flex-col gap-stack-sm">
        <h2 className="text-label-lg text-text-primary">RSVPCard</h2>
        {/* 이름·참석 여부를 채우면 버튼이 켜지고, 보내면 완료 화면으로 바뀌는지 확인 */}
        <div className="rounded-card bg-surface-subtle p-20">
          <RSVPCard />
        </div>
      </section>

      <h2 className="text-heading-md text-text-primary">Button</h2>

      {sizes.map((size) => (
        <section key={size} className="flex flex-col gap-stack-sm">
          <h2 className="text-label-lg text-text-primary">size=&quot;{size}&quot;</h2>
          <div className="flex items-center gap-stack-md">
            <div className="flex flex-col items-start gap-inline-md">
              <span className="text-caption-md text-text-secondary">기본</span>
              <Button size={size}>Button</Button>
            </div>
            <div className="flex flex-col items-start gap-inline-md">
              <span className="text-caption-md text-text-secondary">비활성</span>
              <Button size={size} disabled>
                Button
              </Button>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
