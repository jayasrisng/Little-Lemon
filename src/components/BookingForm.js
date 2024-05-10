import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/BookingForm.module.css";
import { fetchAPI, submitAPI } from "../api";
import { useReservationState } from "../context/ReservationContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FillName from "../pages/Filldetails";

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState('');
  const [guestNum, setGuestsNum] = useState("");
  const [occasion, setOccasion] = useState("");
  const [seating, setSeating] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const navigate = useNavigate();
  const { dispatch } = useReservationState();

  // Load available times when date changes
  useEffect(() => {
    async function loadTimes() {
        if (date) {
            const times = await fetchAPI(new Date(date));
            setAvailableTimes(times);
        }
    }
    loadTimes();
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!date || !time || guestNum < 1 || guestNum > 10 || !occasion) {
      toast.error("Please ensure all fields are correctly filled out.");
      return;
    }

    const formData = { date, time, guestNum, occasion, seating };
    try {
      const result = await submitAPI(formData);
      if (result) {
          dispatch({ type: "SUBMIT_RESERVATION", payload: formData });
          setFormSubmitted(true); // Update state to indicate form submission
      } else {
          toast.error("Failed to book your reservation. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting your reservation.");
      console.error('Submit Error:', error);
    }
  };

  return (
    <div>
      {!formSubmitted ? ( // Render the form if form is not submitted
        <form data-testid="booking-form" className={styles.bookingForm} onSubmit={handleSubmit}>
          <ToastContainer />
          <fieldset>
            <legend>Reservation Details</legend>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label htmlFor="res-time">Choose time</label>
            <select value={time} id="res-time" onChange={(e) => setTime(e.target.value)}>
              <option value="" >Select a time</option>
              {availableTimes.map((t) => (
                <option value={t} key={t}>
                  {t}
                </option> 
              ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="Number of Guests" min="1" max="10" id="guests" value={guestNum} onChange={(e) => setGuestsNum(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} id="occasion" onChange={(e) => setOccasion(e.target.value)}>
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Others">Others</option>
            </select>
            <div className="seating-options">
              <label htmlFor="indoor-seating">Indoor Seating</label>
              <input type="radio" id="indoor-seating" name="seating" value="indoor" checked={seating === 'indoor'} onChange={() => setSeating('indoor')} />
              <label htmlFor="outdoor-seating">Outdoor Seating</label>
              <input type="radio" id="outdoor-seating" name="seating" value="outdoor" checked={seating === 'outdoor'} onChange={() => setSeating('outdoor')} />
            </div>
          </fieldset>
          <input type="submit" aria-label="Submit reservation form" value="Make Your reservation" />
        </form>
      ) : (
        <FillName /> // Render FillName component if form is submitted
      )}
    </div>
  );
};

export default BookingForm;
