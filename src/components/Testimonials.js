import Testimonial from "./Testimonial";
import {testimonials} from "../content/testimonials"

export default function Testimonials() {
    return (
        <section className="testimonials">
            <h3>Testimonials</h3>
            <div className="testimonials-list">
                {testimonials.map((customer) => (
                    <Testimonial key={customer.name} name={customer.name} rating={customer.rating} description={customer.description} photo={customer.photo}/>
                ))}
            </div>
        </section>
    )
}