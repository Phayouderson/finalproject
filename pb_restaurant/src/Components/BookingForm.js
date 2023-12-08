import React, { useState } from 'react'

const BookingForm = () => {

    const  [date, setDate]= useState ('')
    const  [time, setTime]= useState ('')
    const [availableTimes, setAvailableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
      ]);
    const  [guests, setGuests]= useState ('')
    const  [occasion, setOccasion]= useState ('')
    const isFormInvalid = !date || !time || !guests;



    const handleSubmet = (e) =>{
        e.preventDefault();
        setDate('');
        setTime('');
        setGuests('');
        setOccasion('');
        console.log ('we received your reservation!')
    }


  return (
    
    <form onSubmit={handleSubmet} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/>
      
      <label htmlFor="res-time">Choose time</label>
      <select 
      id="res-time" 
      value={time} 
      onChange={(e) => setTime(e.target.value)}>
        <option value="">Select Time</option>
  {availableTimes.map((availableTime, index) => (
    <option key={index} value={availableTime}>
      {availableTime}
    </option>
  ))}
      </select>
      
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
      
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      
      <input disabled={isFormInvalid} type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm