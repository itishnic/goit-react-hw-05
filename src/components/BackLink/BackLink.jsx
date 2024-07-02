import { HiArrowLeft } from "@react-icons/all-files/hi/HiArrowLeft";

import { Link } from "react-router-dom";
import css from "./BackLink.module.css";

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};
