import logo from '../images/assets/logo-footer.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare,faInstagram,faTwitterSquare,faTiktok} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo" className="footer-logo"/>
            <div className="footer-links">
                <ul>
                    <h5>Doormat Navigation</h5>
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
                        <Link to="/order">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <ul>
                <h5>Contact</h5>
                    <li>
                        <Link to="/address">Address</Link>
                    </li>
                    <li>
                        <Link to="tel:123456789">Phone number</Link>
                    </li>
                    <li>
                        <Link to="mailto:little@lemon.com">Email</Link>
                    </li>
                </ul>
                <ul>
                <div className="socials">
                <h5>Social Media Links</h5>
                    <div className="socials-links">
                        <li>
                            <Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} /></Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link>
                        </li>
                        <li>
                            <Link to="https://www.twitter.com"><FontAwesomeIcon icon={faTwitterSquare} /></Link>
                        </li>
                        <li>
                            <Link to="https://www.tiktok.com"><FontAwesomeIcon icon={faTiktok} /></Link>
                        </li>
                    </div>
                    </div>
                </ul>
            </div>
        </footer>
    )
}