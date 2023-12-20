import { useQuery } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  margin: 0 0 20px;
  position: relative;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  color: ${(props) => props.theme.btnColor};
`;

const Back = styled.button`
  position: absolute;
  top: calc(50% - 16px);
  left: 0;
  width: 32px;
  height: 32px;
  font-size: 18px;
  border-radius: 50%;
  border: 0;
  &:hover {
    background-color: ${(props) => props.theme.btnColor};
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Tabs = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 25px 0;
  gap: 10px;
`;

const Tab = styled.li<{ isactive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0;
  border-radius: 10px;
  a {
    color: ${(props) =>
      props.isactive ? props.theme.pointColor : props.theme.textColor};
    display: block;
  }
`;

interface RouterState {
  state: { name: string };
}

interface ITag {
  coin_couter: number;
  ico_couter: number;
  id: string;
  name: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  tag: ITag[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

export interface ITickersData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams<string>();
  const { state } = useLocation() as RouterState;
  const lineChartMatch = useMatch("/:coinId/line");
  const candleChartMatch = useMatch("/:coinId/candle");
  const priceMatch = useMatch("/:coinId/price");

  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });
  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<ITickersData>({
      queryKey: ["ticker", coinId],
      queryFn: () => fetchCoinTickers(coinId),
      // refetchInterval: 5000,
    });

  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </title>
      </Helmet>

      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </Title>
        <Back>
          <Link to="/">&larr;</Link>
        </Back>
      </Header>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank : </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol : </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price : </span>
              <span>{tickersData?.quotes.USD.price.toFixed(2)}</span>
            </OverviewItem>
          </Overview>

          <Description>{infoData?.description}</Description>

          <Overview>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply : </span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Description>👇🏻 Click the down below</Description>

          <Tabs>
            <Tab isactive={lineChartMatch !== null}>
              <Link to={`/${coinId}/line`}>Chart Line</Link>
            </Tab>
            <Tab isactive={candleChartMatch !== null}>
              <Link to={`/${coinId}/candle`}>Chart Candle</Link>
            </Tab>
            <Tab isactive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Outlet />
        </>
      )}
    </Container>
  );
}
export default Coin;
