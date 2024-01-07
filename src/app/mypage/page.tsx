'use client';
import StudyToggle from '@/components/atom/toggle/StudyToggle';
import PolicyItem from '@/components/molecules/mypage/PolicyItem';
import Accordian from '@/components/organisms/mypage/Accordian';
import Setting from '@/components/templates/myPage/Setting';
import SubHeader from '@/components/organisms/mypage/SubHeader';
import Favorites from '@/components/templates/myPage/Favorites';
import React, { useEffect, useState } from 'react';
import BackDrop from '@/components/organisms/modal/backdrop';
import ModalView from '@/components/organisms/modal/modalView';
import Login from '@/components/organisms/modal/Login';
import { KAKAO_REDIRECT_URI_DEPLOY, KAKAO_REDIRECT_URI_DEVELOPMENT } from '@/constants/redirectUri';
import Script from 'next/script';

const page = () => {
  const [toggle, setToggle] = useState(0);

  const user = false; // 로그인 여부

  const loginFn = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NODE_ENV === 'development' ? KAKAO_REDIRECT_URI_DEVELOPMENT : KAKAO_REDIRECT_URI_DEPLOY,
    });
  };

  const toggleFn = (toggleId: number) => {
    setToggle(toggleId);
  };

  return user ? (
    <div className='flex flex-col items-center justify-start min-h-screen min-w-full'>
      <div className=''>
        <StudyToggle activeToggle={toggle} toggleFn={toggleFn} />
      </div>
      <div>{toggle === 0 ? <Favorites /> : <Setting />}</div>

      <div>
        <Accordian />
      </div>
      <div>
        <PolicyItem
          img={''}
          name={'정책 이름'}
          description={
            '안녕하세요! 반갑습니다. 이 정책은 매우 건강에 좋고 매워요! 안녕하세요! 반갑습니다. 이 정책은 매우 건강에 좋고 매워요!'
          }
          like={false}
        />
      </div>
    </div>
  ) : (
    <>
      <BackDrop>
        <ModalView>
          <Login loginFn={loginFn} closeFn={() => {}} />
        </ModalView>
      </BackDrop>
      <Script
        src='https://developers.kakao.com/sdk/js/kakao.js'
        onLoad={() => {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
        }}
      />
    </>
  );
};

export default page;
