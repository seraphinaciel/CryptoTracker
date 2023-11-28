import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.btnColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;
interface RouterState {
  state: { name: string };
}

function Coin() {
  const [loading, setLoading] = useState(true);

  // const { coinId } = useParams<string>();
  const { state } = useLocation() as RouterState;
  console.log(state.name);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
      </Header>

      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
