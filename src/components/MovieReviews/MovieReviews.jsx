import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  getMoviesReview } from "../../api/movies-api";



const MovieReviews = () => {
  const { movieId } = useParams();

  

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const movieReviews = await getMoviesReview(movieId);
        setReviews(movieReviews);
        console.log("data review:>>", movieReviews);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <div>Loader</div>}
      {error && <p>{error}</p>}
      <div>
        
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>
                  <strong>{review.author}</strong>: {review.content}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
}



export default MovieReviews
