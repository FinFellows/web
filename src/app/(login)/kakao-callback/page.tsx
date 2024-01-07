'use client';

import { postKakaoLogin } from '@/api/loginApi';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function KakaoCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const code = searchParams.get('code');

  useEffect(() => {
    if (typeof code === 'string') {
      (async () => {
        const response = await postKakaoLogin(code); // 서버에 로그인 요청
        if (response.status === 200) {
          router.push('/');
        }
      })();
    } else {
      // 에러 처리
    }
  }, []);

  return <div></div>;
}
