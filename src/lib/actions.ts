"use server";

// 서버에서만 실행되는 저장 함수 (Server Action).
// 브라우저에서 보낸 값은 믿지 않고 여기서 다시 검사한 뒤 저장한다.

import { isUuid } from "@/lib/data";
import { LIMITS } from "@/lib/limits";
import { supabase } from "@/lib/supabase";
import type { Invitation, Rsvp } from "@/lib/types";

// 앞뒤 공백을 지운 글자가 비어 있지 않고 max자 이하인지 검사한다
function cleanText(value: unknown, max: number): string {
  if (typeof value !== "string") throw new Error("글자가 아닙니다.");
  const text = value.trim();
  if (text === "" || text.length > max) throw new Error("글자 수가 맞지 않습니다.");
  return text;
}

// 초대장을 저장하고 새 id를 돌려준다
export async function createInvitation(input: Omit<Invitation, "id">): Promise<string> {
  const title = cleanText(input.title, LIMITS.title);
  if (title.split("\n").length > 2) throw new Error("제목은 최대 2줄입니다.");

  const invitation: Invitation = {
    id: crypto.randomUUID(), // 추측하기 어려운 id
    title,
    date: cleanText(input.date, LIMITS.date),
    location: cleanText(input.location, LIMITS.location),
    body: cleanText(input.body, LIMITS.body),
  };

  const { error } = await supabase.from("invitations").insert(invitation);
  if (error) throw error;
  return invitation.id;
}

// 참석 응답을 저장한다
export async function createRsvp(
  invitationId: string,
  input: Pick<Rsvp, "name" | "status" | "companions">,
): Promise<void> {
  if (!isUuid(invitationId)) throw new Error("초대장을 찾을 수 없습니다.");
  if (input.status !== "yes" && input.status !== "no") throw new Error("참석 여부가 잘못됐습니다.");
  if (!Number.isInteger(input.companions) || input.companions < 0) {
    throw new Error("동반 인원이 잘못됐습니다.");
  }

  const { error } = await supabase.from("rsvps").insert({
    invitation_id: invitationId,
    name: cleanText(input.name, LIMITS.name),
    status: input.status,
    // 불참이면 동반 인원은 0
    companions: input.status === "yes" ? input.companions : 0,
  });
  if (error) throw error;
}
