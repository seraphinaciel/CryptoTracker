import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const Box = styled.div`
width: 100%;
height: 100%;
border: 0;
display: flex;
justify-content: center;
align-items: center;
background-color:${(props) => props.theme.backgroundColor};
}
`;
const Title = styled.h1`
  font-size: 36px;
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

export default App;
