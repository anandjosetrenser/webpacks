import { createDate } from "../Service/utilityService";
import { movieListFilter, MovieItem } from "../interfaces/interfaces";

export default function filterMovieListing(
  movieFilterFromParent: {
    filterState: movieListFilter;
  },
  tempMovieList: MovieItem[]
) {
  var movieFiltered = tempMovieList.filter((movieItem) => {
    var movieReleasedate = createDate(movieItem.release_date);
    var certification: string;
    if (movieItem.adult === true) {
      certification = "A";
    } else {
      certification = "U";
    }
    var originalTitle = movieItem.original_title.toLowerCase;
    return (
      movieItem.original_title
        .toLowerCase()
        .includes(
          movieFilterFromParent.filterState.searchKeyword.toLowerCase()
        ) &&
      (movieFilterFromParent.filterState.genres.length === 0 ||
        movieItem.genre_ids.find((movieGenere) => {
          return movieFilterFromParent.filterState.genres.includes(movieGenere);
        })) &&
      (movieFilterFromParent.filterState.movieLanguage === "" ||
        movieFilterFromParent.filterState.movieLanguage ===
          movieItem.original_language) &&
      (movieFilterFromParent.filterState.movieCentification.length === 0 ||
        movieFilterFromParent.filterState.movieCentification.includes(
          certification
        )) &&
      (movieFilterFromParent.filterState.releaseFromDate === null ||
        movieReleasedate >=
          movieFilterFromParent.filterState.releaseFromDate) &&
      (movieFilterFromParent.filterState.releaseToDate === null ||
        movieReleasedate <= movieFilterFromParent.filterState.releaseToDate)
    );
  });
  return movieFiltered;
}
