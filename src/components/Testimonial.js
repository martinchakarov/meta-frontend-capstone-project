import {Link} from 'react-router-dom';
import person1 from '../images/john-smith.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Testimonial() {
    return (
        <article className="testimonial">
            <div className="customer-details">
                <img src={person1} alt="customer"/>
                <div className="customer-rating">
                    <h4>John Smith</h4>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
            </div>
            <div className="testimonial-details">
                <p>Best place for healthy lunch in Chicago! Highly recommended!</p>
                <Link to="#">See more</Link>
            </div>
        </article>
    )
}
