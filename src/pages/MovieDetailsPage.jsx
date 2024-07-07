import { useEffect, useRef, useState } from "react";
import { useParams, Outlet, NavLink, useLocation } from "react-router-dom";
import { getSingleMovieApi } from "../api/movies-api";
import css from "./MovieDetailsPage.module.css";
import { BackLink } from "../components/BackLink/BackLink";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  

    const location = useLocation();
    const backLinkHref = useRef(location.state ?? "/");
    
    
    
    
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getSingleMovieApi(movieId);
        setMovie(data);
        console.log("data :>>", data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <BackLink to={backLinkHref.current}> Go back</BackLink>
      {isLoading && <div>Loader</div>}
      {error && <div>Error</div>}
      {movie && (
        <div className={css.container}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
              alt=""
            />
          </div>
          <div>
            <h3>{movie.original_title}</h3>
            <h4>Overview:{movie.overview}</h4>
            <h4>Genres:{movie.popularity}</h4>
          </div>
        </div>
      )}
      <hr></hr>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
