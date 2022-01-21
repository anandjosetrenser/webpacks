import React from "react";
import { movieListFilter } from "../interfaces/interfaces";

interface contextFilter {
  filterState: movieListFilter;
  setFilterState: any;
  isFilterSubmitted: boolean;
  setFilterSubmiited: any;
}
const MovieFilterContext = React.createContext<contextFilter>({
  filterState: {
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
  },
  setFilterState: () => {},
  isFilterSubmitted: false,
  setFilterSubmiited: () => {},
});

const MovieFilterProvider = MovieFilterContext.Provider;
const MovieFilterConsumer = MovieFilterContext.Consumer;

export { MovieFilterProvider, MovieFilterConsumer, MovieFilterContext };
