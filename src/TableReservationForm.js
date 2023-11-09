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

  //console.log(fetchAPI('11.11.1989')) // script with these api func dont work!!!

const [avaliableTime, setAvaliableTime] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formVaildation = () => {
    return (formData.name && 
      formData.phoneNumber && 
      formData.numberOfPeople && 
      formData.reservationDate && 
      formData.reservationTime && 
      formData.occasion
  )}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit} className="reservPage">
        <h1>Booking form</h1>
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
      <label htmlFor="res-date">Reservation date</label>
            <select id="res-date" name="reservationDate" value={formData.reservationDate} onChange={handleChange}>
                <option>10.11.2023</option>
                <option>11.11.2023</option>
                <option>12.11.2023</option>
            </select>
        <label htmlFor="res-time">Reservation time</label>
            <select id="res-time" name="reservationTime" value={formData.reservationTime} onChange={handleChange}>
                {avaliableTime.map((time)=>(
                    <option>{time}</option>
                ))}
            </select>
        <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
      <button type="submit" disabled={!formVaildation()} >Book Now</button>
    </form>
  );
};

export default TableReservationForm;