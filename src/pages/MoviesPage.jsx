import {  useState } from "react";
import { searchMovies } from "../api/movies-api";
import {  Link } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setMovies([]);
      setError(false);
      setLoading(true);
      const data = await searchMovies(topic);
        setMovies(data);
        console.log("data :>>", data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <div>Loader</div>}
      {error && <div>Error</div>}

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
