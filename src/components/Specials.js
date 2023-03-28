import Card from './Special';
import {Link} from 'react-router-dom';

export default function Specials() {
    return (
        <section className="specials">
            <div className="specials-header">
                <h3>Specials</h3>
                <Link to="/order"><div className="button">Online Menu</div></Link>
            </div>
            <div className='specials-list'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}