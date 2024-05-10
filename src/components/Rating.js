import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Rating.module.css";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const maxStars = 5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.rating}>
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} />
      ))}
      {hasHalfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} opacity={0.5} />
      ))}
    </div>
  );
};

export default Rating;
