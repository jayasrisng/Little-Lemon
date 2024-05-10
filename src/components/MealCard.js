import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/MeaCard.module.css";

const MealCard = ({ meal }) => {
  return (
    <div className={styles.mealCard}>
      <div className={styles.mealImg}>
        <img src={meal.image} alt="" />
      </div>
      <div className={styles.mealDetails}>
        <div className={styles.mealDetailsHeader}>
          <h3>{meal.title}</h3>
          <p>${meal.price}</p>
        </div>
        <div className={styles.mealDetailsDescription}>{meal.description}</div>
        <div className={styles.mealDetailsFooter}>
          <a href="/order">Order a delivery</a>
          <FontAwesomeIcon icon={faBicycle} />
        </div>
      </div>
    </div>
  );
};

export default MealCard;
