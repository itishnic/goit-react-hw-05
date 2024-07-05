import { useEffect, useMemo, useState } from "react";
import { searchMovies } from "../api/movies-api";


import MovieList from "../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get("username");

const memoizedMovieList = useMemo(
  () => <MovieList movies={movies} />,
  [movies]
);


  useEffect(() => {
    
    if (username === "") return;

    async function fetchUser() {
      try {
        const data = await searchMovies(username);
        setMovies(data);
        console.log("data :>>", data)
      }
      catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, [username]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ username: form.elements.username.value });
    form.reset();
  };
  // const handleSubmit = async (topic) => {
  //   try {
  //     setMovies([]);
  //     setError(false);
  //     setLoading(true);
  //     const data = await searchMovies(topic);
  //     setMovies(data);
  //     console.log("data :>>", data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button type="submit">Search</button>
      </form>
      {/* <SearchForm onSearch={handleSearch} /> */}
      {isLoading && <div>Loader</div>}
      {error && <div>Error</div>}
      {memoizedMovieList}

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

export default MoviesPage;

// import { Field, Form, Formik } from "formik";

// const MoviesPage = ({ submit }) => {
//   const handleSubmit = (values, action) => {
//     action.resetForm();
//     submit(values.query);
//   };
//   return (
//     <div>
//       <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
//         <Form>
//           <Field
//             name="query"
//             placeholder="Search images and photos"
//             type="text"
//           />
//           <button  type="submit">
//             Search
//           </button>

//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default MoviesPage;
