import logo from '../images/Logo.svg';

export default function Header() {
    return (
            <nav>
                <ul>
                    <li>
                        <a href="/home">
                            <img src={logo} alt="logo"/>
                        </a>
                    </li>
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
                        <a href="/order">Order online</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </nav>
    )
}