import { useState, useEffect } from 'react';

export default function BookingForm(props) {

    const [bookingData, setBookingData] = useState({
        "date": '',
        "time": '17:00',
        "guests": 1,
        "occasion": 'Birthday',
      });

    const [inputValid, setInputValid] = useState(false);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setBookingData((prevState) => ({
          ...prevState,
          [id]: value,
        }));
      };

      const handleDateChange = (event) => {
        const { id, value } = event.target;
        setBookingData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
        props.dispatch({ type: 'SET_DATE', payload: value });
    };

    useEffect(() => {
      if (!props.availableTimes.times.includes(bookingData.time)) {
        setBookingData((oldState) => ({
          ...oldState,
          time: props.availableTimes.times.sort()[0]
        }))
      }
    }, [props.availableTimes.times, bookingData.time])

    useEffect(() => {
      if (
        bookingData.date 
        && bookingData.time 
        && new Date(`${bookingData.date} ${bookingData.time}`) >= new Date() 
        && bookingData.guests > 0 && bookingData.guests <= 10
        && ['Anniversary', 'Birthday'].includes(bookingData.occasion)
        ) {
        setInputValid(true);
      } else {
        setInputValid(false)
      }
    }, [bookingData])

    return (
        <form className="booking-form" style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={() =>props.submitForm(bookingData)}>
          <label htmlFor="date">Choose date</label>
          <input aria-label="On Click" type="date" id="date" value={bookingData.date} min={new Date().toISOString().split("T")[0]} onChange={handleDateChange}/>
          <label htmlFor="time">Choose time</label>
          <select id="time" value={bookingData.time} onChange={handleInputChange}>
            {props.availableTimes.times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input aria-label="On Click" type="number" placeholder="1" min="1" max="10" id="guests" value={bookingData.guests} onChange={handleInputChange}/>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={bookingData.occasion} onChange={handleInputChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
          </select>
          {inputValid ?
              <input className="button" type="submit" value="Make Your Reservation"/>
            : <input style={{backgroundColor: 'grey', color: 'black'}} className="button" type="submit" value="Make Your Reservation" disabled/>
          }
        </form>
    )
}