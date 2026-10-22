import { createClient } from "@supabase/supabase-js";

// Supabase 연결. 주소와 공개 키는 .env.local에서 읽는다.
// 공개(publishable) 키라서 RLS로 허용한 읽기·추가만 할 수 있다.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  throw new Error(".env.local에 NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY를 넣어주세요.");
}

export const supabase = createClient(url, key);
