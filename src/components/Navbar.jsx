import { Link } from "react-router-dom";
import Logo from "../assets/movie-logo.png";
export const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} alt="" />
      <Link to="/" className="text-[#ab9257] text-3xl font-medium">
        Movies
      </Link>
      <Link to="/watchlist" className="text-[#ab9257] text-3xl font-medium">
        Watchlist
      </Link>
    </div>
  );
};
