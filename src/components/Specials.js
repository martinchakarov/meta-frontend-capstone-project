import Card from './Special'

export default function Specials() {
    return (
        <section className="specials">
            <div className="specials-header">
                <h3>Specials</h3>
                <button>Online Menu</button>
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