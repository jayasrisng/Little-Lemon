import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/BookingPage.module.css";


const BookingPage = () => {
  return (
    <div className={styles.bookingPage}>
      <Header />
      <div>
        <h2>Reserve a table!</h2>
      </div>
      <BookingForm />
      <Footer />
    </div>
  );
};

export default BookingPage;
