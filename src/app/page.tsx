import { redirect } from "next/navigation";

// / : 첫 화면은 따로 없고, 초대장 만들기 화면으로 보낸다.
// 컴포넌트 확인 화면은 /test 에 있다.
export default function Home() {
  redirect("/create");
}
