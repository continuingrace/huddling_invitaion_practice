import { supabase } from "@/lib/supabase";
import type { Invitation, Rsvp } from "@/lib/types";

// uuid 모양인지 확인한다. 아니면 DB에 묻지 않고 바로 "없음"으로 처리한다
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function isUuid(id: string) {
  return UUID.test(id);
}

// id로 초대장을 찾는다. 없으면 null
export async function getInvitation(id: string): Promise<Invitation | null> {
  if (!isUuid(id)) return null;

  const { data, error } = await supabase
    .from("invitations")
    .select("id, title, date, location, body")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data;
}

// 초대장에 달린 응답 목록
export async function getRsvps(invitationId: string): Promise<Rsvp[]> {
  const { data, error } = await supabase
    .from("rsvps")
    .select("id, invitation_id, name, status, companions")
    .eq("invitation_id", invitationId);

  if (error) throw error;
  // DB의 invitation_id를 화면에서 쓰는 invitationId로 바꾼다
  return data.map((r) => ({
    id: r.id,
    invitationId: r.invitation_id,
    name: r.name,
    status: r.status,
    companions: r.companions,
  }));
}
