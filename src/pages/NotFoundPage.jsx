import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div >
      
      <p>
        Go back to <Link to="/">Home page</Link>.
      </p>
    </div>
  );
};

export default NotFoundPage;
