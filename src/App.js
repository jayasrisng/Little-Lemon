import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./App.css";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import FillName from "./pages/Filldetails"; // Ensure the correct path for FillName

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/fill-name" element={<FillName />} /> {/* Ensure correct path */}
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
