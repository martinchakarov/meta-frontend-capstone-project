import food from '../images/assets/lemon.png';
import {Link} from 'react-router-dom';

export default function Hero() {
    return (
        <section className="hero">
            <div className="intro">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>A charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                <Link to="/reservations"><div className="button">Reserve a Table</div></Link>
            </div>
            <img src={food} alt="food serving"/>
        </section>
    )
}