import Special from './Special';
import {Link} from 'react-router-dom';
import {specials} from '../content/specials'

export default function Specials() {
    return (
        <section className="specials">
            <div className="specials-header">
                <h3>Specials</h3>
                <Link to="/order"><div className="button">Online Menu</div></Link>
            </div>
            <div className='specials-list'>
            {specials.map((dish) => (
                <Special key={dish.title} title={dish.title} price={dish.price} description={dish.description} photo={dish.photo}/>
            ))}
            </div>
        </section>
    )
}

