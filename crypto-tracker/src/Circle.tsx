import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
  // default
}

const Container = styled.div<ContainerProps>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 2px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}
function Circle({ bgColor, borderColor }: CircleProps) {
  const [counter, setCounter] = useState(1);
  // const [value, setValue] = useState<number|string>(0); state 타입 맞춤 변경
  setCounter(2);
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}
export default Circle;
