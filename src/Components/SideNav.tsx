import React, { useContext } from "react";
import MovieSort from "./MovieSort";
import MovieFilter from "./MovieFilter";
import { MovieFilterContext } from "../hooks/MovieFilter";

function SideNav() {
  const movieFilterFromParent = useContext(MovieFilterContext);
  return (
    <div className="leftNavContailer col-md-3">
      <MovieSort />
      <MovieFilter />
      <div>
        <button
          className="btn btn-info"
          onClick={() => {
            movieFilterFromParent.setFilterSubmiited(true);
          }}
          style={{ width: "87%" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SideNav;
