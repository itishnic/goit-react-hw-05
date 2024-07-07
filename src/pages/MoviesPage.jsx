import { useEffect,  useState } from "react";
import { searchMovies } from "../api/movies-api";


import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");




  useEffect(() => {
    
    if (name === "")  {
      alert("Please enter search term!");
      return;
    }

    async function fetchUser() {
      try {
        setIsLoading(true);
        const data = await searchMovies(name);
        setMovies(data);
        setError(false);
      }
      catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, [name]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ name: form.elements.name.value });
    form.reset();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Search</button>
      </form>
      {isLoading && <div>Loader</div>}
      {error && <div>Error</div>}
      <MovieList movies={movies} />

      
    </div>
  );
};

export default MoviesPage;

