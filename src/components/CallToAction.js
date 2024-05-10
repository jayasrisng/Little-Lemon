import { Link } from "react-router-dom";
import styles from "../styles/CallToAction.module.css";
import Button from "./Button";

const CallToAction = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Action */}
        <div className={styles.heroAction}>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <div className={styles.heroText}>
            <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </div>
          <Link to="/reservations">
            <Button>Reserve a table</Button>
          </Link>
        </div>
        {/* Image */}
        <div className={styles.heroImg}>
          <img src="/restaurant-food.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
