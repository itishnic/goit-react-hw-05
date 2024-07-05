import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

import MoviesPage from "./pages/MoviesPage";
import css from "./App.module.css";
import clsx from "clsx";
import Navigation from "./components/Navigation/Navigation";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import MovieCast from "./components/MovieCast/MovieCast";
import NotFoundPage from "./pages/NotFoundPage";



const App = () => {
  return (
    <div className={css.container}>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
