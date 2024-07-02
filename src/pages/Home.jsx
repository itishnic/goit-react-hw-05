import { useEffect, useState } from "react";
import { getMoviesApi } from "../api/movies-api";
import { Link } from "react-router-dom";

const Home = () => {
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
        <ul>
          {movies.length > 0 &&
            movies.map((movie) => (
              <li key={movie.id}>
                <div> {movie.original_title}</div>
                
                <Link to={`/movies/${movie.id}`}>MovieDetailsPage</Link>
              </li>
            ))}
        </ul>
      </div>
    );
};

export default Home;
