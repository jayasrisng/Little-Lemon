import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FillName = ({ formData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      alert("Please fill in all required fields.");
      return;
    }
    // Combine form data with new fields
    const updatedFormData = { ...formData, firstName, lastName, email, phone, specialRequest };
    console.log(updatedFormData); // You can replace this with your submit API call
    navigate("/confirmed-booking");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="specialRequest">Special Request:</label>
          <textarea
            id="specialRequest"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
          />
        </div>
        <button type="submit">Confirm Reservation</button>
      </form>
    </div>
  );
};

export default FillName;
