import {Link} from 'react-router-dom';

export default function ConfirmedBooking() {
    return (
        <section className="confirmation">
            <h1>Thank you for your booking!</h1>
            <p>Your table has been reserved. Check your email for a message with your reservation details.</p>
            <Link to="/home">Go home</Link>
        </section>
    )
}