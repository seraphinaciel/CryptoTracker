import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

// 비트코인 세계에서 하루치
interface IHistorical {
  time_open: string;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function ChartCandle() {
  const { coinId } = useParams<string>();
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ["ohlcv", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  const isDark = useRecoilValue(isDarkAtom);

  return (
    <div>
      {isLoading ? (
        "Loading chart"
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data:
                data?.map((price) => ({
                  x: new Date(Number(price.time_open) * 1000).toUTCString(),
                  y: [price.open, price.high, price.low, price.close],
                })) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              type: "candlestick",
              animations: {
                enabled: true,
                easing: "easeinout",
                speed: 800,
                animateGradually: {
                  enabled: true,
                  delay: 150,
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 350,
                },
              },
              // width: 500,
              height: 300,
              toolbar: {
                show: true,
                tools: {
                  zoomin: false,
                  zoomout: false,
                  pan: false,
                },
              },
              background: "transparent",
            },
            grid: {
              show: true,
              borderColor: "rgba(255,255,255,0.12",
            },
            stroke: {
              curve: "smooth",
              width: 1,
            },
            yaxis: {
              show: true,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: true },
              type: "datetime",
              categories: data?.map((date) =>
                new Date(date.time_close * 1000).toUTCString()
              ),
            },
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default ChartCandle;
