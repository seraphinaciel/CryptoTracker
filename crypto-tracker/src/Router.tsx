import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import CoinsList from "./routes/CoinsList";
import ChartLine from "./routes/ChartLine";
import ChartCandle from "./routes/ChartCandle";
import Price from "./routes/Price";

interface IRouterProps {
  isDark: boolean;
  toggleDark: () => void;
}

function Router({ isDark, toggleDark }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:coinId" element={<Coin isDark={isDark} />}>
          <Route path="line" element={<ChartLine isDark={isDark} />} />
          <Route path="candle" element={<ChartCandle />} />
          <Route path="price" element={<Price />} />
        </Route>
        <Route
          path="/"
          element={<CoinsList isDark={isDark} toggleDark={toggleDark} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
