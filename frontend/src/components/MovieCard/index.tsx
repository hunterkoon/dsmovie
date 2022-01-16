import MovieScore from "components/MovieScore";
import { movie } from "constants/movie";


const MovieCard = () => {
  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
      </div>
    </div>
  );
};

export default MovieCard;
