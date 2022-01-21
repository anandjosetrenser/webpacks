import React, { useState } from "react";
// import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.css";
import SideNav from "./SideNav";
import MovieListing from "./MovieListing";
import { MovieFilterProvider } from "../hooks/MovieFilter";
import { movieListFilter } from "../interfaces/interfaces";
function MainContainer() {
  const [filterState, setFilterState] = useState<movieListFilter>({
    movieWatched: "0",
    availabilities: true,
    searchAllRelease: true,
    releaseFromDate: null,
    releaseToDate: null,
    genres: [],
    movieCentification: [],
    movieLanguage: "",
    searchKeyword: "",
    availableCategories: [],
    searchReleaseCategory: [],
  });
  const [isFilterSubmitted, setFilterSubmiited] = useState<boolean>(false);
  return (
    <MovieFilterProvider
      value={{
        filterState: filterState,
        setFilterState: setFilterState,
        isFilterSubmitted: isFilterSubmitted,
        setFilterSubmiited: setFilterSubmiited,
      }}
    >
      <div className="row">
        <SideNav />
        <MovieListing />
      </div>
    </MovieFilterProvider>
  );
}

export default MainContainer;
