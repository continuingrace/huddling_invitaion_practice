"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import Button from "@/components/Button";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";
import { LIMITS } from "@/lib/limits";

// Figma RSVPCard (node 95:647)
// 보기 화면(/i/[id])의 참석 신청 카드.
// 제출 전에는 form, 제출이 끝나면 같은 자리에서 done 화면으로 바뀐다.
// 실제 저장은 onSubmit으로 받은 함수가 한다 (보기 화면에서는 Supabase 저장 함수 createRsvp).
export type RsvpData = {
  name: string;
  status: "yes" | "no";
  companions: number;
};

type RSVPCardProps = {
  onSubmit?: (data: RsvpData) => Promise<void> | void;
  className?: string;
};

export default function RSVPCard({ onSubmit, className = "" }: RSVPCardProps) {
  const id = useId();
  const [name, setName] = useState("");
  const [status, setStatus] = useState<RsvpData["status"] | null>(null);
  const [companions, setCompanions] = useState(0);
  const [submitted, setSubmitted] = useState<RsvpData | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  // 필수값(이름, 참석 여부)이 비어 있으면 버튼을 막는다
  const canSubmit = name.trim() !== "" && status !== null && !pending;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!status) return;

    // 불참이면 동반 인원은 0으로 보낸다
    const data: RsvpData = {
      name: name.trim(),
      status,
      companions: status === "yes" ? companions : 0,
    };

    setPending(true);
    setError("");
    try {
      await onSubmit?.(data);
      setSubmitted(data);
    } catch {
      setError("보내지 못했어요. 잠시 후 다시 시도해주세요.");
    } finally {
      setPending(false);
    }
  }

  const card = `flex w-full flex-col gap-24 rounded-card bg-surface-default px-20 py-24 ${className}`;

  if (submitted) {
    return (
      <div className={card}>
        <div className="flex w-full flex-col items-center gap-12 py-40 text-center">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">참석 여부를 보냈어요</p>
          <p className="text-body-md text-text-secondary">
            호스트에게 응답이 전달됐어요.
          </p>
        </div>
        <div className="flex w-full flex-col gap-8 rounded-card bg-surface-subtle p-16">
          <InfoRow type="spread" label="이름" value={submitted.name} />
          <InfoRow
            type="spread"
            label="참석 여부"
            value={submitted.status === "yes" ? "참석" : "불참"}
          />
          <InfoRow type="spread" label="동반 인원" value={`${submitted.companions}명`} />
        </div>
      </div>
    );
  }

  return (
    <form className={card} onSubmit={handleSubmit}>
      <div className="flex w-full flex-col items-center gap-6 text-center">
        <h2 className="text-heading-lg text-text-strong">참석 여부 알려주기</h2>
        <p className="text-body-md text-text-secondary">
          이름과 참석 여부를 남겨주세요.
        </p>
      </div>

      <div className="flex w-full flex-col gap-24">
        <Input
          id={`${id}-name`}
          name="name"
          maxLength={LIMITS.name}
          label="이름"
          required
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <fieldset className="flex w-full flex-col gap-8">
          <legend className="contents">
            <Label required>참석 여부</Label>
          </legend>
          <div className="flex w-full items-center">
            <RadioOption
              id={`${id}-yes`}
              name="status"
              value="yes"
              label="참석"
              className="flex-1"
              checked={status === "yes"}
              onChange={() => setStatus("yes")}
            />
            <RadioOption
              id={`${id}-no`}
              name="status"
              value="no"
              label="불참"
              className="flex-1"
              checked={status === "no"}
              onChange={() => setStatus("no")}
            />
          </div>
        </fieldset>

        <div className="flex w-full flex-col gap-8">
          <Label required>동반 인원</Label>
          <Stepper name="companions" onChange={setCompanions} />
          <p className="text-caption-md text-text-tertiary">
            본인을 제외하고 함께 오는 인원이에요.
          </p>
        </div>
      </div>

      {error && <p className="text-caption-md text-feedback-error">{error}</p>}

      <Button type="submit" size="lg" disabled={!canSubmit} className="w-full">
        참석 여부 보내기
      </Button>
    </form>
  );
}
