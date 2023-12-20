import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import CoinsList from "./routes/CoinsList";
import ChartLine from "./routes/ChartLine";
import ChartCandle from "./routes/ChartCandle";
import Price from "./routes/Price";

function Router() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/:coinId`} element={<Coin />}>
          <Route path="line" element={<ChartLine />} />
          <Route path="candle" element={<ChartCandle />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route
          path={`${process.env.PUBLIC_URL}`}
          element={<CoinsList />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
