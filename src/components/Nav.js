import logo from '../images/assets/logo.png';
import {Link} from 'react-router-dom';


export default function Header() {
    return (
            <nav>
                <ul>
                    <li>
                        <Link to="/home">
                            <img src={logo} alt="logo" className="logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/order">Order online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
    )
}