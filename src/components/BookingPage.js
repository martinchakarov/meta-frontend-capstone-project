import BookingForm from './BookingForm';

export default function BookingPage(props) {
    return (
        <section className="booking-page">
            <div className="booking-form-container">
                <h1>Reserve a Table</h1>
                <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
            </div>
        </section>
    )
}
