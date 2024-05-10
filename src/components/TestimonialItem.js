import Rating from "./Rating";
import styles from "../styles/Testimonialitem.module.css";

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialHeader}>
        <img src={testimonial.image} alt="" />
        <p>{testimonial.name}</p>
      </div>
      <Rating rating={testimonial.rating} />
      <div>
        <blockquote>{testimonial.text}</blockquote>{" "}
      </div>
    </div>
  );
};

export default TestimonialItem;
