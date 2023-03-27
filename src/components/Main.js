import Home from './Home';
import Reservations from './Reservations';

import {Routes, Route} from 'react-router-dom';

export default function Main() {
    return (
    <Routes> 
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservations" element={<Reservations/>}></Route>
    </Routes>
    )
}