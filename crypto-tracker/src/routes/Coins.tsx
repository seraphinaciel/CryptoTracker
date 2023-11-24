import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.btnColor};
`;
function Coins() {
  return <Title>Coins</Title>;
}
export default Coins;
