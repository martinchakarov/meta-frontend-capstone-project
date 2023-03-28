import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Testimonial(props) {
    return (
        <article className="testimonial">
            <div className="customer-details">
                <img src={props.photo} alt="customer"/>
                <div className="customer-rating">
                    <h4>{props.name}</h4>
                    <div className="rating">
                        {Array.from({length:props.rating}, (_, i) => <FontAwesomeIcon key={i} icon={faStar}/>)}
                    </div>
                </div>
            </div>
            <div className="testimonial-details">
                <p>{props.description}</p>
                <Link to="#">See more</Link>
            </div>
        </article>
    )
}
