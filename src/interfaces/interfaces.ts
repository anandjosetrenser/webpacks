export interface movieListFilter {
  movieWatched: string;
  availabilities: boolean;
  availableCategories: [];
  searchAllRelease: boolean;
  searchReleaseCategory: [];
  releaseFromDate: Date | null;
  releaseToDate: Date | null;
  genres: [];
  movieCentification: string[];
  movieLanguage: string;
  searchKeyword: string;
}
export interface MovieItem {
  poster_path: string;
  id: number;
  original_title: string;
  release_date: string;
  genre_ids: [];
  original_language: string;
  adult: boolean;
  vote_average: string;
}
