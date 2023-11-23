# React Project

- React, CRA
  > CRA 설치 하는 방법

```bash
npx create-react-app 내 앱 이름
```

## Styled Components

> styled-components 설치 하는 방법

```bash
npm i styled-components
```

### 기본

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

### 스타일 상속

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

### 태그명 바꾸기

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

### 속성 반복 지정하기

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

### keyframes 만들기

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

### Theme 만들기

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

## Typescript

js를 기본으로 만들어짐, strongly-typed,

> cra에 타입 스크립트 설치 하는 방법

```bash
npx create-react-app 내 앱 이름 --template typescript
npm i --save-dev @types/styled-components
npm i styled-components
```

###

```typescript
const plus = (a: number, b: number) => a + b;
plus(1, 1);
```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```

###

```javascript

```
