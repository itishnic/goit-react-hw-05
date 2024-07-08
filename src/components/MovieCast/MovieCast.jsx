import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCast } from "../../api/movies-api";
// import css from "./MovieCast.module.css"



const MovieCast = () => {
  const { movieId } = useParams();

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>"; 

  const [cast, setCast] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesCast(movieId);
        setCast(data);
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
      {isloading && <div>Loader</div>}
      {error && <div>Error</div>}

      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name} 
            />
            <div>
              {actor.name} as {actor.character}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast
