import type { Config } from 'tailwindcss';

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) } as any;
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) } as any;
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) } as any;
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) } as any;
const rem0_5 = { ...Array.from(Array(60)).map((_, i) => `${i / 10}rem`) } as any;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_200,
      lineHeight: px0_100,
      width: px0_1000,
      height: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      minWidth: px0_1000,
      minHeight: px0_1000,
      spacing: px0_200,
      borderRadius: px0_100,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        main: 'var(--main)',
        negative: 'var(--negative)',
        bgBlind: 'var(--bg-blind)',
        contentsSecondary: 'var(--contents-secondary)',
        typoSecondary: 'var(--typo-secondary)',
        typoPrimary: 'var(--typo-primary)',
        typoTertiary: 'var(--typo-tertiary)',
        border01: 'var(--border-01)',
        border02: 'var(--border-02)',
        border00: 'var(--border-00)',
        border04: 'var(--border-04)',
        mainLevel100: 'var(--main-level-100)',
        mainLevel200: 'var(--main-level-200)',
        mainLevel300: 'var(--main-level-300)',
        mainLevel400: 'var(--main-level-400)',
        mainLevel500: 'var(--main-level-500)',
        mainLevel600: 'var(--main-level-600)',
        mainLevel700: 'var(--main-level-700)',
        mainLevel800: 'var(--main-level-800)',
        mainLevel900: 'var(--main-level-900)',
        mainFooter: 'var(--main-footer)',
        imageBase: 'var(--image-base)',
        bg: 'var(--bg)',
        dark: {
          primary: 'var(--dark-primary)',
          secondary: 'var(--dark-secondary)',
          main: 'var(--dark-main)',
          negative: 'var(--dark-negative)',
          bgBlind: 'var(--dark-bg-blind)',
          contentsSecondary: 'var(--dark-contents-secondary)',
          typoSecondary: 'var(--dark-typo-secondary)',
          typoPrimary: 'var(--dark-typo-primary)',
          typoTertiary: 'var(--dark-typo-tertiary)',
          border01: 'var(--dark-border-01)',
          border02: 'var(--dark-border-02)',
          border00: 'var(--dark-border-00)',
          border04: 'var(--dark-border-04)',
          mainLevel100: 'var(--dark-main-level-100)',
          mainLevel200: 'var(--dark-main-level-200)',
          mainLevel300: 'var(--dark-main-level-300)',
          mainLevel400: 'var(--dark-main-level-400)',
          mainLevel500: 'var(--dark-main-level-500)',
          mainLevel600: 'var(--dark-main-level-600)',
          mainLevel700: 'var(--dark-main-level-700)',
          mainLevel800: 'var(--dark-main-level-800)',
          mainLevel900: 'var(--dark-main-level-900)',
          mainFooter: 'var(--dark-main-footer)',
          imageBase: 'var(--dark-image-base)',
          bg: 'var(--dark-bg)',
        },
        darkComponent: 'var(--dark-component)',
      },
      fontFamily: {
        pretendard: 'var(--font-families-pretendard)',
        teneda: 'Tenada, sans-serif',
      },
      // lineHeight, fontSize 중복 선언으로 우선 디자인 시스템 토큰은 주석 처리했습니다.
      // lineHeight: {
      //   '0': 'var(--line-heights-0)',
      //   '1': 'var(--line-heights-1)',
      //   '2': 'var(--line-heights-2)',
      // },
      fontWeight: {
        '0': 'var(--font-weights-pretendard-0)',
        '1': 'var(--font-weights-pretendard-1)',
        '2': 'var(--font-weights-pretendard-2)',
      },
      // fontSize: {
      //   '0': 'var(--font-size-0)',
      //   '1': 'var(--font-size-1)',
      //   '2': 'var(--font-size-2)',
      //   '3': 'var(--font-size-3)',
      //   '4': 'var(--font-size-4)',
      //   '5': 'var(--font-size-5)',
      // } ,
      letterSpacing: {
        '0': 'var(--letter-spacing-0)',
      },
      paragraphSpacing: {
        '0': 'var(--paragraph-spacing-0)',
      },
      zIndex: {
        toggle: '1',
        header: '50',
        modal: '100',
        mobileHeader: '500',
      },
      screens: {
        tablet: '900px',
        // => @media(min-width: 900px) {...}
        desktop: '1680px',
        mobile: '390px',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss'), require('autoprefixer')],
};

export default config;
