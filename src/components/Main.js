import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import Specials from './Specials';
import ComingSoon from './ComingSoon';



import {Routes, Route} from 'react-router-dom';
import { useReducer } from 'react';

export const initializeTimes = () => {
    return {
        date: '',
        times: [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
          ]
    }

}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'SET_DATE':
            return {date: action.payload, times: ['22:00', '21:00']};
        default:
            throw new Error('Something went wrong')
    }
}

export default function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

    return (
    <Routes> 
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Specials/>}></Route>
        <Route path="/order" element={<ComingSoon/>}></Route>
        <Route path="/login" element={<ComingSoon/>}></Route>
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}></Route>
    </Routes>
    )
}