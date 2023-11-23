# React Project

- React, CRA
  > CRA 설치 하는 방법

```bash
npx create-react-app 내 앱 이름
```

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

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
