import millify from "millify";
import Header from "../../components/Header";

const MainPageView = ({ coins, handleSearch, searchInput }) => {
  return (
    <>
      <Header />

      <div className="p-5 ">
        {coins.length === 0 && <p>Yükleniyor...</p>}
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            className="search"
          />
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Sıra</th>
              <th>Coin</th>
              <th>Fiyat</th>
              <th>Market Hacmi</th>
              <th>Değişim(24h) </th>
              <th>DEğişim % (24h) </th>
            </tr>
          </thead>
          <tbody>
            {(searchInput || coins)?.map((coin) => (
              <tr key={coin.id}>
                <td>{millify(coin.rank)}</td>

                <td>
                  <span className="text-warning">{coin.symbol}</span>
                  <span>{coin.name} </span>
                </td>

                <td>{millify(coin.priceUsd)} </td>
                <td>{millify(coin.marketCapUsd)} </td>
                <td>{millify(coin.volumeUsd24Hr)} </td>
                <td>{millify(coin.changePercent24Hr)} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainPageView;
