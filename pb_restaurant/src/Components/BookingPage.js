import { useReducer } from 'react';
import BookingForm from './BookingForm';

const initialState = {
  availableTimes: ['12:00 PM', '1:00 PM', '6:00 PM', '7:00 PM'],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = action.payload;
      if (selectedDate >= new Date().toISOString().split('T')[0]) {
        return { 
          ...state, 
          availableTimes: ['2:00 PM', '3:00 PM', '8:00 PM', '9:00 PM'] 
        };
      }
      return state; // <-- Move this line to the correct position
    default:
      return state;
  }
};


const BookingPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = (selectedDate) => {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split('T')[0];

    if (selectedDate >= formattedCurrentDate) {
    dispatch({ type: 'UPDATE_TIMES', 
    payload: selectedDate,
  })
}
  }


  return (
    <div className='reserveTable'>
        <h1>Little Lemon Reserve a Table</h1>
        <BookingForm
        selectedDate={state.selectedDate}
        availableTimes={state.availableTimes}
        updateTimes={updateTimes}
      />
    </div>
  )
}

export default BookingPage;