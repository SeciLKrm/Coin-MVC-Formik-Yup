import axios from "axios";
import { createContext, useState } from "react";

export const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coins, setCoins] = useState([]);

  function getCoins() {
    axios.get("https://api.coincap.io/v2/assets").then(
      (res) => setCoins(res.data.data)
      //   console.log(res.data.data)
    );
  }
  return (
    <CoinContext.Provider value={{ getCoins, coins }}>
      {children}
    </CoinContext.Provider>
  );
}
export default CoinContext;
