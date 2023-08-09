import { useContext, useEffect, useState } from "react";
import MainPageView from "./MainPageView";
import CoinContext from "../../context/CoinContext";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const MainPageController = () => {
  const { getCoins, coins } = useContext(CoinContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(coins);
  const [searchInput, setSearchInput] = useState(null);

  useEffect(() => {
    getCoins();
  }, []);
  useEffect(() => {
    // çıkış yaparsa logine yönlendir
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value?.toLowerCase();

    const filteredInput = coins?.filter((coin) =>
      coin.name.toLowerCase().includes(searchQuery)
    );
    console.log(searchInput);
    setSearchInput(filteredInput);
  };

  return (
    <div>
      <MainPageView
        coins={coins}
        handleSearch={handleSearch}
        searchInput={searchInput}
      />
    </div>
  );
};

export default MainPageController;
