import { Link } from "react-router-dom";

const MovieList = ({movies}) => {
  return (
    <div>
      <ul>
        {movies.length > 0 &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
