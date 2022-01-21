import { MovieItem } from "../interfaces/interfaces";
import ENV from "../Service/enviornmrnt";
import { changeDateFormatToDefault } from "../Service/utilityService";
export default function MovieTile(props: { movieItem: MovieItem }) {
  return (
    <div key={props.movieItem.id} className="items">
      <div className="movie-rate-block">{props.movieItem.vote_average}</div>
      <div className="image-container">
        <img
          alt=""
          src={`${ENV.ASSET_URL}t/p/w220_and_h330_face${props.movieItem.poster_path}`}
          srcSet={`${ENV.ASSET_URL}t/p/w220_and_h330_face${props.movieItem.poster_path} 1x, ${ENV.ASSET_URL}t/p/w220_and_h330_face${props.movieItem.poster_path} 2x`}
        />
      </div>
      <div className="moveDetails">
        <div className="movieTitle" title={props.movieItem.original_title}>
          {props.movieItem.original_title.length < 35
            ? props.movieItem.original_title
            : props.movieItem.original_title.substr(0, 34) + "..."}
        </div>
        <div className="movieRelaeseDate">
          {changeDateFormatToDefault(props.movieItem.release_date)}
        </div>
      </div>
    </div>
  );
}
