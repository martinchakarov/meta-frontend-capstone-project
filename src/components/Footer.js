import logo from '../images/logo-footer.png'

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo" className="footer-logo"/>
            <ul>
                <h5>Doormat Navigation</h5>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservations</a>
                </li>
                <li>
                    <a href="/order">Order Online</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
            <ul>
            <h5>Contact</h5>
                <li>
                    <a href="/address">Address</a>
                </li>
                <li>
                    <a href="/phone">Phone number</a>
                </li>
                <li>
                    <a href="mailto:little@lemon.com">Email</a>
                </li>
            </ul>
            <ul>
            <h5>Social Media Links</h5>
                <li>
                    <a href="https://www.facebook.com">Facebook</a>
                </li>
                <li>
                    <a href="https://www.instagram.com">Instagram</a>
                </li>
                <li>
                    <a href="https://www.twitter.com">Twitter</a>
                </li>
                <li>
                    <a href="https://www.tiktok.com">Twitter</a>
                </li>
            </ul>
            
        </footer>
    )
}