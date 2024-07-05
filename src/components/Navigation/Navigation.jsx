import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          HomePage
        </NavLink>

        <NavLink to="/movies" className={buildLinkClass}>
          MoviesPage
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
