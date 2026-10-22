// 입력 글자 수 제한. 입력창(maxLength)과 나중에 서버 검사에서 같이 쓴다.
export const LIMITS = {
  title: 40, // 초대장 제목 (최대 2줄)
  date: 40, // 일시
  location: 100, // 장소 (주소)
  body: 1000, // 본문
  name: 20, // 게스트 이름
} as const;
