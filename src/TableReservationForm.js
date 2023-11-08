import React, { useState } from "react";

const TableReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    numberOfPeople: "",
    reservationDate: "",
    reservationTime: "",
    occasion: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit} className="reservPage">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <input
        type="number"
        name="numberOfPeople"
        placeholder="Number of People"
        value={formData.numberOfPeople}
        onChange={handleChange}
      />
      {/* <input
        type="date"
        name="reservationDate"
        placeholder="Reservation Date"
        value={formData.reservationDate}
        onChange={handleChange}
      />
      <input
        type="time"
        name="reservationTime"
        placeholder="Reservation Time"
        value={formData.reservationTime}
        onChange={handleChange}
      /> */}
      <label for="res-date">Reservation date</label>
            <select id="res-date" name="reservationDate" value={formData.reservationDate} onChange={handleChange}>
                <option>10.11.2023</option>
                <option>11.11.2023</option>
                <option>12.11.2023</option>
            </select>
        <label for="res-time">Reservation time</label>
            <select id="res-time" name="reservationTime" value={formData.reservationTime} onChange={handleChange}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
        <label for="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default TableReservationForm;