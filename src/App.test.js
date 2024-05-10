import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reservation Details");
  expect(headingElement).toBeInTheDocument();
});
