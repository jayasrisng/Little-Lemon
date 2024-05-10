import TestimonialItem from "./TestimonialItem";
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria",
      image: "maria.jpg",
      rating: 4.5,
      text: "Dining at Little Lemon was a delightful experience—every dish was a masterpiece of flavor!",
    },
    {
      id: 2,
      name: "Antony",
      image: "antony.jpg",
      rating: 5,
      text: "Absolutely loved the vibrant ambiance and friendly staff at Little Lemon, truly a gem!",
    },
    {
      id: 3,
      name: "Tamika",
      image: "tamika.jpg",
      rating: 4.5,
      text: "Little Lemon's farm-to-table approach makes every meal feel specially crafted just for you.",
    },
    {
      id: 4,
      name: "Brandon",
      image: "brandon.jpg",
      rating: 5,
      text: "From the first bite to the last, Little Lemon exceeded all my expectations with its innovative cuisine!",
    },
  ];
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonialsContainer}>
        <h2>What people say about us!</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
