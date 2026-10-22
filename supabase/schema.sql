-- 초대장 · 참석 응답 테이블 (src/lib/mock.ts의 Invitation · Rsvp 타입과 같은 컬럼)
-- Supabase 대시보드 > SQL Editor에 붙여 넣고 Run 한다.
-- 글자 수 제한은 src/lib/limits.ts와 같다.

-- 1. 초대장
create table public.invitations (
  id       uuid primary key default gen_random_uuid(),  -- 추측하기 어려운 ID
  title    text not null check (char_length(title)    between 1 and 40),
  date     text not null check (char_length(date)     between 1 and 40),
  location text not null check (char_length(location) between 1 and 100),
  body     text not null check (char_length(body)     between 1 and 1000)
);

-- 2. 참석 응답
create table public.rsvps (
  id            uuid primary key default gen_random_uuid(),
  invitation_id uuid not null references public.invitations (id),  -- TS의 invitationId
  name          text not null check (char_length(name) between 1 and 20),
  status        text not null check (status in ('yes', 'no')),      -- yes 참석 · no 불참
  companions    integer not null default 0 check (companions >= 0), -- 음수 인원 금지
  check (status = 'yes' or companions = 0)                          -- 불참이면 동반 인원 0
);

-- 3. RLS 켜기: 켜면 아래 정책으로 허용한 것만 할 수 있다
alter table public.invitations enable row level security;
alter table public.rsvps       enable row level security;

-- 4. 정책: 누구나 읽기 · 쓰기(추가)만 허용
--    수정(update)·삭제(delete) 정책은 만들지 않으므로 자동으로 막힌다
create policy "누구나 초대장 읽기" on public.invitations
  for select to anon, authenticated using (true);
create policy "누구나 초대장 만들기" on public.invitations
  for insert to anon, authenticated with check (true);

create policy "누구나 응답 읽기" on public.rsvps
  for select to anon, authenticated using (true);
create policy "누구나 응답 남기기" on public.rsvps
  for insert to anon, authenticated with check (true);

-- 5. 권한도 읽기 · 추가만 남긴다 (정책과 이중으로 막기)
revoke all on public.invitations, public.rsvps from anon, authenticated;
grant select, insert on public.invitations, public.rsvps to anon, authenticated;
