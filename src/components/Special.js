import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

export default function Special(props) {
    return (
        <article className="special">
            <img src={props.photo} alt={props.title}/>
            <div className="special-description">
                <div className="specials-details">
                    <h4 className="special-title">{props.title}</h4>
                    <h4 className="special-price">{'$' + props.price}</h4>
                </div>
                <p>{props.description}</p>
                <Link to="/order">Order a delivery <FontAwesomeIcon icon={faBicycle} /></Link>
            </div>
        </article>
    )
}