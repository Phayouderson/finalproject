import React, { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const currentDate = new Date();

  const isFormInvalid = !date || !time || !guests;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
  
    if (newDate < formattedCurrentDate) {
      console.log('Please choose a date in the future.');
       setDate(formattedCurrentDate);
      return;
    }
    setDate(newDate);
    updateTimes(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
    console.log('We received your reservation!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
        {availableTimes.map((timeOption) => (
          <option key={timeOption} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        disabled={isFormInvalid}
        type="submit"
        value="Make Your Reservation"
      />
    </form>
  );
};

export default BookingForm;
