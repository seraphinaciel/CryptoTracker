# Crypto Tracker

- dark mode
- charts(line, candle)

# React Project

- react: "18.2.0",
- react-router-dom: "6.20.0",
- react-query: "3.39.3",
- react-helmet: "6.1.0",
- @tanstack/react-query: "^5.8.9",
- typescript: "4.9.5",
- styled-components: "6.1.1",
- apexcharts: "3.44.0",
- react-apexcharts: "1.4.1",
- recoil: "0.7.7",
- gh-pages: "6.1.0",

# 숙제

✅ 뒤로 가기 버튼
✅ line 차트를 candlestick
`[{ x: date, y: [O,H,L,C] }]`
✅ price 탭 만들기

# Dark Mode

recoil과 ThemeProvider로 구현

- `theme.tsx`에 dark/light 두 가지 `theme` 생성.
- `ThemeProvider`적용 및 `GlobalStyle`과 `theme` 연결.
- 토글 버튼을 눌렀을 때, `state`가 변경.
- `ThemeProvider`의 `theme` 프로퍼티 내부에 삼항연산자를 이용해 `state`가 변할 때 다른 `Theme`이 적용되도록 설정.
