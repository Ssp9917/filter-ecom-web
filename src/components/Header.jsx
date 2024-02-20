import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../context/Context";

const Header = () => {

  const {count} = useContext(FilterContext)
  return (
    <div className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-center gap-3 text-3xl  items-center">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/cart" className="text-white">
          Cart ({count.length})
        </Link>
      </div>
    </div>
  );
};

export default Header;
