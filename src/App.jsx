import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

// import MoviesPage from "./pages/MoviesPage";
import css from "./App.module.css";
// import clsx from "clsx";
// import Navigation from "./components/Navigation/Navigation";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import MovieReviews from "./components/MovieReviews/MovieReviews";
// import MovieCast from "./components/MovieCast/MovieCast";
// import NotFoundPage from "./pages/NotFoundPage";
import { Suspense, lazy } from "react";


const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));







const App = () => {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
