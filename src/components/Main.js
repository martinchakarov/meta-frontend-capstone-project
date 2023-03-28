import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import Specials from './Specials';
import ComingSoon from './ComingSoon';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../api';



import {Routes, Route, useNavigate} from 'react-router-dom';
import { useReducer } from 'react';

export const initializeTimes = () => {
    const today = new Date();
    return {
        date: today,
        times: fetchAPI(today)
    }

}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'SET_DATE':
            return {date: action.payload, times: fetchAPI(new Date(action.payload))};
        default:
            throw new Error('Something went wrong')
    }
}

export default function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
    const navigate = useNavigate();

    const submitForm = (data) => {
        if (submitAPI(data) === true) {
            navigate('/confirmation')
            return;
        } else {
            alert('Something went wrong.')
        }
    }

    return (
    <Routes> 
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Specials/>}></Route>
        <Route path="/order" element={<ComingSoon/>}></Route>
        <Route path="/login" element={<ComingSoon/>}></Route>
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking/>}></Route>
    </Routes>
    )
}