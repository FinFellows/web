'use client';

import KakaoChatIcon from '@/public/icons/kakao_chat.svg';
import { cls } from '@/utils/cls';

export default function KakaoBtn({ ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cls(
        props.className ?? '',
        'bg-[#FEE500] rounded-12 flex justify-center items-center gap-8 label-medium',
      )}
    >
      <KakaoChatIcon />
      <span>카카오로 계속하기</span>
    </button>
  );
}
