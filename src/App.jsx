import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";


import MoviesPage from "./pages/MoviesPage";
import css from "./App.module.css";
import clsx from "clsx";
import Navigation from "./components/Navigation/Navigation";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MovieCast from "./components/MovieCast/MovieCast";

const App = () => {
  return (
    <div className={css.container}>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
          

        <Route path="/movies" element={<MoviesPage />} />
       
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
