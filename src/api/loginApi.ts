export async function postKakaoLogin(code: string) {
  return await fetch('http://api.finfellows.co.kr/auth/kakao/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });
}
