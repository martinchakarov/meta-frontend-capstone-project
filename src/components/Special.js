import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';



import greekSalad from '../images/greek salad.jpg'

export default function Special() {
    return (
        <article className="special">
            <img src={greekSalad} alt={'Greek salad'}/>
            <div className="special-description">
                <div className="specials-details">
                    <h4 className="special-title">Greek salad</h4>
                    <h4 className="special-price">$12.99</h4>
                </div>
                <p>A delicious combination of cucumbers, tomatoes and onions with feta cheese.</p>
                <Link to="order">Order a delivery <FontAwesomeIcon icon={faBicycle} /></Link>
            </div>
        </article>
    )
}