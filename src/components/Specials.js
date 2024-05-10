import MealCard from "./MealCard";
import styles from "../styles/Specials.module.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const Specials = () => {
  const meals = [
    {
      id: 1,
      title: "Greek salad",
      image: "greek-salad.jpg",
      price: 9.99,
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: 2,
      title: "Bruschetta",
      image: "bruschetta.jpg",
      price: 6.79,
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      image: "lemon-dessert.jpg",
      price: 8.50,
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined!",
    },
  ];

  return (
    <div className={styles.specials}>
      <div className={styles.specialsContainer}>
        <div className={styles.specialsHeader}>
          <h2>This weeks specials!</h2>
          <Link to="/menu">
            <Button>Online Menu</Button>
          </Link>
        </div>
        <div className={styles.specialsGrid}>
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specials;
