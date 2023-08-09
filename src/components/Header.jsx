import { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {
  const { user, logoutUser } = useContext(UserContext);
  return (
    <div className="bg-black p-2 d-flex justify-content-between  ">
      <h3>
        <img
          src="https://www.iconpacks.net/icons/1/free-coin-icon-794-thumb.png"
          alt=""
          style={{ width: "50px" }}
        />
        <span>CoinMania</span>
      </h3>
      {user && (
        <div>
          <button
            className="bg-secondary text-light"
            type="submit"
            onClick={logoutUser}>
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
