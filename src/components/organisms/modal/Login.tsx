'use client';

import KakaoBtn from '@/components/atom/button/KakaoBtn';
import CloseIcon from '@/public/icons/modal_close.svg';

export default function Login({ loginFn, closeFn }: { loginFn: () => void; closeFn: () => void }) {
  return (
    <div className='relative bg-white rounded-10 flex flex-col items-center gap-20 pt-60 px-48 pb-38'>
      <button onClick={closeFn}>{/* <CloseIcon className='absolute top-18 right-18' /> */}</button>
      <div className='text-black w-180 text-center paragraph-medium'>관심목록 기능을 사용하려면 로그인이 필요해요</div>
      <KakaoBtn className='py-8 px-38' onClick={loginFn} />
    </div>
  );
}
