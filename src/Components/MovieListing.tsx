import ENV from "../Service/enviornmrnt";
import React, { useEffect, useState, useContext } from "react";
import { MovieFilterContext } from "../hooks/MovieFilter";
import { movieListFilter, MovieItem } from "../interfaces/interfaces";
import axios from "axios";
import { createDate } from "../Service/utilityService";
import filterMovieListing from "../Service/MovieListingServies";
import MovieTile from "./MovieTile";
var tempMovieList: MovieItem[] = [];

function MovieListing() {
  const movieFilterFromParent = useContext(MovieFilterContext);
  const [movieList, setMovieList] = useState<MovieItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [initDone, setInit] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (movieFilterFromParent.isFilterSubmitted === true) {
      movieFilterFromParent.setFilterSubmiited(false);
      var movieFiltered = filterMovieListing(
        movieFilterFromParent,
        tempMovieList
      );
      setMovieList(movieFiltered);
      setLoading(false);
    } else if (initDone === false) {
      axios
        .get(
          `${ENV.MOVIE_API_URL}3/movie/popular?api_key=f4250dcf013b1608d4ab3e8a5ee483c2`
        )
        .then(function (response) {
          setInit(true);
          tempMovieList = response.data.results;
          setMovieList(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          setTimeout(() => setLoading(false), 1000);

          // always executed
        });
    } else {
      setLoading(false);
    }
    return () => {};
  }, [movieFilterFromParent.isFilterSubmitted]);

  if (loading === true) {
    return (
      <div className="col-md-9">
        <h4 style={{ textAlign: "center" }}>Loading.....</h4>
      </div>
    );
  }
  if (movieList.length === 0) {
    return (
      <div className="col-md-9">
        <h4 style={{ textAlign: "center" }}>No Record Found...</h4>
      </div>
    );
  }
  return (
    <div className="col-md-9">
      <div className="movieListContainer">
        {movieList.map((movieItem) => (
          <MovieTile key={movieItem.id} movieItem={movieItem} />
        ))}
      </div>
    </div>
  );
}

export default MovieListing;
