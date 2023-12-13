## terminal : default(Git Bash)

F1 → setting Json-UI 검색&클릭 → terminal.integrated.profiles.windows 찾기 → 파일 열어 아래와 같이 수정하기

```js
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    },
    "Command Prompt": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": [],
      "icon": "terminal-cmd"
    },
    // 추가
    "Git Bash": {
      "source": "Git Bash"
    }
  },
  "terminal.integrated.defaultProfile.windows": "GitBash", // 추가
```

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

> 설치 방법

```bash
# CRA 설치
npx create-react-app 앱 이름

# CRA + Typescript 설치
npx create-react-app 앱 이름 --template typescript

# Styled Components 설치
npm i styled-components

# React Router 설치
npm i react-router-dom

# React Query
npm i react-query
# react v18은 쿼리를 못불러와서 모듈 설치
npm i @tanstack/react-query

# ApexCharts
npm install --save react-apexcharts apexcharts

# React Helmet
npm i react-helmet
# 타입스크립트에서 안 먹힐때는 @types 붙여서
npm i --save-dev @types/react-helmet

```

> Styled Components 자동완성 플러그인

{vscode-styled-components}

# Styled Components

## 기본

const 변수명 = styled.태그명\`css구문\`

```javascript
import styled from "styled-components";

// 기본 예시
// export를 하면 다른 문서에서도 가져다 쓸 수 있음
export const Wrapper = styled.div`
  display: flex;
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.bgColor};
  // props를 통해 배경색 변경

  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
  }

  ${Emoji}:hover {
      font-size: 90px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal">
        {/* props를 통해 배경색 변경 */}
        <span>👱🏻‍♀️</span>
      </Box>
      {/* props를 통해 배경색 변경 */}
      <Box bgColor="tomato">
        <Emoji>👱🏻‍♀️</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
```

## 스타일 상속

const 변수명 = styled.(_상속받을 변수명_) ...

```javascript
// (생략)

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.bgColor};
`;

// 상속 예시 : Box의 스타일을 상속받음
const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="tomato" />
      <Circle bgColor="tomato" />
    </Wrapper>
  );
}
```

## 태그명 바꾸기

<변수명 as="태그명" />

```javascript
// (생략)

const Btn = styled.button`
  color: white;
  background: teal;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Wrapper as="header">
      <Btn>Login</Btn>
      <Btn as="a" href="/">
        Login
      </Btn>
    </Wrapper>
  );
}
```

## 속성 반복 지정하기

const 변수명 = styled.태그명._attrs_({속성: 값, 속성: 값...}) ...

```javascript
// (생략)

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background: teal;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Wrapper>
      <Input />
      <Input />
      <Input />
    </Wrapper>
  );
}
```

## keyframes 만들기

```javascript
import styled, { keyframes } from "styled-components";

// (생략)

const rotateAni = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0;
  }50%{
    transform:rotate(365deg);
    border-radius:50%;
  }100%{
    transform:rotate(0deg);
    border-radius:0;
  }
`;
const Box = styled.div`
  // (생략)
  animation: ${rotateAni} 1s infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}
```

## Theme 만들기

기본적으로 모든 색상이 가지고 있는 object

theme만 바꾸면 컴포넌트는 그대로 가진채 색상만 변경이 된다.(유지보수 👍🏻)

```js
// index.js

// (생략)

import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};
const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 여기에서 변경하면 됨 */}
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// App.js

const Box = styled.div`
  // 생략
  background-color:${(props) => props.theme.backgroundColor};
}
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Title>Hello 👱🏻‍♀️</Title>
      </Box>
    </Wrapper>
  );
}
```

# Typescript

js를 기본으로 만들어짐, strongly-typed,

```typescript
const plus = (a: number, b: number) => a + b;
plus(1, 1);
```

## Interface

- 타입스크립트에게 ojbect 형태를 설명해 줌(코드 실행 전 브라우저에 에러 나옴)
- 우리 자신(?)과 props를 보호
- prop types과 유사(코드 실행 후 브라우저에 에러 나옴)
  `interface I변수명`

```ts
interface IPlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: IPlayerShape) =>
  `Hello ${playerObj} you are ${playerObj.age} years old.`;

sayHello({ name: "goo", age: 12 });
sayHello({ name: "hi", age: 1 });
```

## Props

- Default Props : `변수명: 타입;`
- Optional Props : `변수명?: 타입;`
- styled components props : `const 변수명 = styled.태그명<props명> ... `

```ts
// App.tsx
function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor="red" />
      <Circle bgColor="tomato" text="hi" />
    </div>
  );
}

// Circle.tsx
import styled from "styled-components";

// default props
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

// optional props
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  border: 2px solid ${(props) => props.borderColor};
`;

// 선택 props 일 때, 디폴트 값 설정하는 방법
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}
```

## useState()

```tsx
import { useState } from "react";

// 생략

function Circle({ bgColor, borderColor }: CircleProps) {
  // state 타입 number ↔ string으로 변경
  // const [value, setValue] = useState<number|string>(0);
  const [counter, setCounter] = useState(1);
  setCounter(2);
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}
```

## event에 타입 지정

```ts
// App.tsx

function App() {
  const [value, setValue] = useState("");
  // event에 타입 지정
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  // event에 타입 지정
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  // event에 타입 지정
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
      <button onClick={onClick}>on</button>
    </div>
  );
}
```

## Theme 2

```javascript
// styled.d.ts 생성
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}

// theme.ts 생성
import { DefaultTheme } from "styled-components/dist/types";
export const lightTheme: DefaultTheme = {
  bgColor: "white",
  textColor: "black",
  btnColor: "tomato",
};
export const darkTheme: DefaultTheme = {
  bgColor: "black",
  textColor: "white",
  btnColor: "teal",
};

// index.tsx

// 생략

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// App.tsx

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <H1>hello</H1>
    </Container>
  );
}


```

## async, await, fetch

- 데이터 가져오기

```js
useEffect(() => {
  // 특정한 시기(처음, 끝, 원하는 시기)에만 코드를 실행
  (async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/coins");
    const json = await response.json();
    ...
  })();
}, []);
```

위의 두줄을 캡슐화하여 시간 절약
`const response = await (response).json;`

```js
useEffect(() => {
  (async () => {
    const response = await (
      await fetch("https://api.coinpaprika.com/v1/coins")
    ).json();
  })();
}, []);
```

## useParams()

```ts
// Chart.tsx
function Chart() {
  const params = useParams();
  console.log(params);

  const { coinId } = useParams<string>();
}
```

```bash
Object.values(temp1);
Object.values(temp1)
  .map((v) => typeof v)
  .join();
```

## useEffect()

- 컴포넌트의 시작에서만 코드를 실행하고 싶으면 []
- 컴포넌트의 변수가 변할 때마다 코드를 실행하고 싶으면 [변수]

```ts
useEffect(() => {
  ...
}, []);
```

## 전역 스타일 초기화

GlobalStyle : 전역 스타일 처리하는 헬퍼 함수

```ts
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  css 초기화 기재
`;
```

## Route

```ts
// App.tsx
import Router from "./Router";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

// Router.tsx
// react-router-dom 설치
import { BrowserRouter, Routes, Route } from "react-router-dom";
// src/routes 폴더 안에 tsx 파일 만들기
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />}></Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
```

## Nested Routes

- 탭, 섹션 등에 매우 좋음!

  [v6.20 자세히 읽어보기](https://ui.dev/react-router-nested-routes/)

### url nested

- 첫 번째 방법

부모 Route의 path에 `/*`를 표시 : `path="/경로/*"`하여 nested route가 render 될 수 있음을 표시
자식 route를 부모 route의 element 내부에 작성

```ts
// Router.tsx
<Route
  path="/:coinId/*" // ← 이 부분
  element={<Coin/>}
 />

// Coin.tsx
<Routes>
  <Route path="chart" element={<Chart />} />
  <Route path="price" element={<Price />} />
</ Routes>

```

- 두 번째 방법 (my pick 💗)

자식 Route를 (부모 element의 내부가 아닌) Route 내부에 작성
부모의 element 안에 Outlet을 이용해 자식 Route들을 render 시키면 됨.
outlet 사용중 props를 넘기고 싶을 경우 [useOutletContext로 넘어가기](#useoutletcontext)

```ts
// Router.tsx
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />}>
          // nested route
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
          // nested route
        </Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

// Coin.tsx
import { Outlet } from "react-router-dom";

function Coin() {
  return <Outlet />;
}
```

### tab nested

```ts
<Link to={`/${coinId}/chart`}>Chart</Link>
<Link to={`/${coinId}/price`}>Price</Link>
```

## useMatch()

- 현재 위치를 기준으로 지정된 경로에 대한 일치 데이터를 반환
- [v6.20 자세히 읽어보기](https://reactrouter.com/en/6.16.0/hooks/use-match)
- `useMatch("비교 경로")`

```ts
const chartMatch = useMatch("/:coinId/chart");
const priceMatch = useMatch("/:coinId/price");
```

## matchPath()

- URL 경로 이름에 대해 경로 패턴을 일치시키고 일치에 대한 정보를 반환
- `matchPath(비교 경로, 현재 경로)`
- [v6.20 자세히 읽어보기](https://reactrouter.com/en/6.16.0/utils/match-path)

```ts
const currentPathname = useLocation().pathname;
const chartMatch = matchPath("/:coinId/chart", currentPathname);
const priceMatch = matchPath("/:coinId/price", currentPathname);
```

## 선택 만들기 : isactive

```ts
const Tab = styled.li<{ isactive: boolean }>`
  // isactive 추가
  // ...생략
  a {
    color: ${(props) =>
      props.isactive ? props.theme.pointColor : props.theme.textColor};
  }
`;

<Tabs>
  <Tab isactive={chartMatch !== null}>
    // isactive 추가
    <Link to={`/${coinId}/chart`}>Chart</Link>
  </Tab>
  <Tab isactive={priceMatch !== null}>
    <Link to={`/${coinId}/price`}>Price</Link>
  </Tab>
</Tabs>;
```

## useOutletContext()

```ts
// Coin.tsx
<Outlet context={{ coinId }} />;

// Chart.tsx;
interface ICoinId {
  coinId: string;
}
function Chart() {
  const { coinId } = useOutletContext<ICoinId>();
  const { isLoading, data } = useQuery({
    queryKey: ["ohlcv", coinId], // coinId string|undefined 에러날거임
    queryFn: () => fetchCoinHistory(coinId),
  });
}

// api.ts
export function fetchCoinHistory(coinId: string | undefined) {
  // 이거 추가하면 오케
  // 생략
}
```

# React Query

[공식문서](https://tanstack.com/query/v5/)

_장점_

- fetcher 함수를 만들 수 있다.
- isLoading같은 함수가 불렸는지 아닌지 알려주고, 함수가 끝날 때 결과값을 data에 저장해 접근하게 해줌
- 캐시로 저장하여 데이터를 유지할 수 있다.
  API로부터 response를 받아 캐시로 저장하기 때문에 data 찾을 때 캐시에서 찾고 다시 이전 페이지로 돌아와도 API에 접근하지 않는다. 저장된 캐시, 사용하는 쿼리를 개발자 도구로 보려면 [ReactQueryDevtools](https://tanstack.com/query/v5/docs/react/devtools)

## 기본 설정

```ts
// index.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 생략

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
```

**이로써 리액트 쿼리 사용할 수 있게 되었다.**

## fetcher 함수

promise를 반환해야한다.

```ts
// api.ts에서 fetcher함수 생성
export async function fetchCoins() {
  // promise 반환
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
```

## useQuery()

[사용법](https://mycodings.fly.dev/blog/2023-09-17-how-to-use-react-query-and-usequery)

### 기본 문법

```ts
const { return 변수(?)) } = useQuery<인터페이스>({
  queryKey: ["식별가능한 고유한 쿼리 키"], //
  queryFn: fetcher함수,
  선택항목,
});
```

- _return 기본제공 변수_
  - isLoading, data 등 사용이 가능한 변수가 공식문서에 있으니 참조.
- _queryKey_
  - 식별 가능한 고유한 쿼리 키, [쿼리키 보기](https://tanstack.com/query/latest/docs/react/guides/query-keys)
  - 쿼리 키는 안정적인 해시로 해시.
  - 이 키가 변경되면 쿼리가 자동으로 업데이트(활성화됨이 false로 설정되지 않은 경우).
- _queryFn_
  - 기본 쿼리 기능이 정의되지 않은 경우에만 해당되는 필수 항목.
  - 쿼리가 데이터를 요청하는 데 사용할 함수.
  - QueryFunctionContext를 수신.
  - 데이터를 해결하거나 오류를 발생시키는 promise를 반환해야 함(fetcher함수)
- 선택 항목
  - [refetchInterval](https://react-query.tanstack.com/reference/useQuery#_top)
    - 숫자 : 모든 쿼리가 밀리초 단위로 이 빈도로 계속 다시 가져옴
    - 함수 : 빈도를 계산하는 쿼리와 함께 함수가 실행

```ts
// Coins.tsx

const [coins, setCoins] = useState<ICoin[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  (async () => {
    const response = await fetch("https://api.coinpaprika.com/v1/coins");
    const json = await response.json();

    setCoins(json.slice(0, 100));
    setLoading(false);
  })();
}, []);

// 위의 코드가 아래처럼 한 줄로 줄어듬

const { isLoading, data } = useQuery<ICoin[]>({
  queryKey: ["allCoins"],
  queryFn: fetchCoins,
  refetchInterval: 5000,
});
```

# Apex Charts

기본 문법 : `<Chart type="차트 유형" series={[차트에 표시하려는 데이터]} options={차트의 구성 옵션}`

※ 자세한 내용은 [공식문서](https://apexcharts.com/docs/installation/) 참조

```ts
// Chart.tsx
import ApexChart from "react-apexcharts";

function Chart() {
  return (
    <div>
      <ApexChart
        type="line" // default line
        series={[
          // default undefined
          {
            name: "Price",
            data: data?.map((price) => price.close) ?? [],
          },
        ]}
        options={{
          //차트 꾸미기
          theme: {
            mode: "dark",
          },
          chart: {
            width: 500, // default 100%
            height: 300, // default auto
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          grid: { show: false },
          stroke: {
            curve: "smooth",
            width: 4,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: false },
            type: "datetime", // date로 타입 변경, 얘 안하면 utc 형태로 주루룩 날짜가 나옴
            categories: data?.map((date) =>
              new Date(date.time_close * 1000).toUTCString()
            ), // 툴팁에 나오는 date, 현 날짜를 초단위로 들어오니 UTC 형태로 변환해야함
          },
          fill: {
            type: "gradient",
            gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
          },
          colors: ["#0fbcf9"],
          tooltip: {
            y: {
              formatter: (value) => `$ ${value.toFixed(3)}`, // y축의 값 형식
            },
          },
        }}
      />
    </div>
  );
}
export default Chart;

// #5.13
```

# React Helmet

[공식 홈페이지](https://www.npmjs.com/package/react-helmet)

- title, base, meta, link, script, noscript, and style 태그 등 유효한 모든 `<head>` 태그를 지원.
- body, html 및 title 태그에 대한 속성을 지원.
- 서버 측 렌더링을 지원.
- 중첩된 구성 요소는 중복된 헤드 변경 사항을 재정의.
- 동일한 구성 요소에 지정하면 중복된 헤드 변경 사항이 유지됨("apple-touch-icon"과 같은 태그 지원).
- DOM 변경 추적을 위한 콜백.

```ts
// Coin.tsx
import { Helmet } from "react-helmet";
function Coin() {
  return (
    <Helmet>
      <title>문서의 제목</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
  );
}
```

# 숙제

✅ 뒤로 가기 버튼
✅ line 차트를 candlestick
`[{ x: date, y: [O,H,L,C] }]`
✅ price 탭 만들기

# 배포

실제 라우터 경로 : `https://닉네임.github.io/`
내 플젝 설정 경로 : `https://닉네임.github.io/리포지터리이름/`

> 라우터 경로가 맞지 않기 때문에 빈 화면만 뜨는 에러!

> BrowserRouter에 `basename={process.env.PUBLIC_URL}` 추가

> PUBLIC_URL : package.json의 homepage URL값으로 설정

[create react app docs 참고](https://create-react-app.dev/docs/advanced-configuration/)

```ts
// Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>생략</Routes>
    </BrowserRouter>
  );
}
```

# State Management

> recoil, redux 같은 라이브러리를 사용하여 관리해야 함

## Recoil

> state 관리 라이브러리

##

```ts

```

##

```ts

```

##

```ts

```

##

```ts

```

##

```ts

```

##

```ts

```
