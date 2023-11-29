import { useQuery } from "@tanstack/react-query";
import { useOutletContext, useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";

function Chart() {
  const { coinId } = useParams<string>();

  const { isLoading, data } = useQuery({
    queryKey: ["ohlcv", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });
  return <h1>Chart</h1>;
}
export default Chart;

// #5.13
