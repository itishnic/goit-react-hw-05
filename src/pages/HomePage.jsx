import { useEffect, useState } from "react";
import { getMoviesApi } from "../api/movies-api";

import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesApi();
        setMovies(data) ;
        console.log("data :>>", data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

    return (
      <div>
        <h2>Trending today</h2>
        {isLoading && <div>Loader</div>}
        {error && <div>Error</div>}
        <MovieList  movies ={movies} />
        {/* <ul>
          {movies.length > 0 &&
            movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            ))}
        </ul> */}
      </div>
    );
};

export default HomePage;
