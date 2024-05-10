import Header from "../components/Header";
import { useReservationState } from "../context/ReservationContext";
import styles from "../styles/ConfirmedBooking.module.css";

const ConfirmedBooking = () => {
  const {
    state: { formData: reservation },
  } = useReservationState();
  return (
    <>
      <Header />
      <div className={styles.confirmedBooking}>
        <h1>Congrats!</h1>
        <h2>Your booking has been confirmed</h2>
        <table>
          <thead>
            <tr>
              <th>Reservation date</th>
              <th>Reservation time</th>
              <th>Number of guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.guestNum}</td>
              <td>{reservation.occasion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ConfirmedBooking;
