import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

interface ITickersData {
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
      ath_date: string; // 최고가 날짜
      ath_price: number; // 최고가
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

const Table = styled.section`
  dl {
    border: 1px solid gainsboro;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    margin-bottom: 20px;
    dt {
      order: 1;
      padding: 10px 0;
      background-color: gainsboro;
      font-size: 12px;
      color: #333;
    }
    dd {
      order: 2;
      padding: 20px 0;
    }
  }
`;

const Card = styled.section`
  border: 1px solid gainsboro;
  border-radius: 10px;
  dl {
    text-align: center;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    dt {
      width: 30%;
    }
    dd {
      font-size: 14px;
      &:first-of-type {
        font-size: 24px;
      }
      &:last-child {
        color: hotpink;
      }
    }
  }
`;

function Price() {
  const { coinId } = useParams<string>();
  const { isLoading: tickersLoading, data: tickersData } =
    useQuery<ITickersData>({
      queryKey: ["ticker", coinId],
      queryFn: () => fetchCoinTickers(coinId),
    });

  // console.log(tickersData);

  return (
    <div>
      {tickersLoading ? (
        "Loading Price"
      ) : (
        <div>
          <Table>
            <dl>
              <dt>1시간</dt>
              <dd>{tickersData?.quotes.USD.percent_change_1h}%</dd>
              <dt>24시간</dt>
              <dd>{tickersData?.quotes.USD.percent_change_24h}%</dd>
              <dt>7일</dt>
              <dd>{tickersData?.quotes.USD.percent_change_7d}%</dd>
              <dt>30일</dt>
              <dd>{tickersData?.quotes.USD.percent_change_30d}%</dd>
              <dt>1년</dt>
              <dd>{tickersData?.quotes.USD.percent_change_1y}%</dd>
            </dl>
          </Table>

          <Card>
            <dl>
              <dt>역대 최고가</dt>
              <dd>$ {tickersData?.quotes.USD.ath_price.toFixed(2)}</dd>
              <dd>{tickersData?.quotes.USD.ath_date.slice(0, 10)}</dd>
              <dd>{tickersData?.quotes.USD.percent_from_price_ath}%</dd>
            </dl>
          </Card>
        </div>
      )}
    </div>
  );
}
export default Price;
