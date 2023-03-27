import food from '../images/lemon.png';

export default function Hero() {
    return (
        <section className="hero">
            <div className="intro">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>A charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                <button>Reserve a Table</button>
            </div>
            <img src={food} alt="food serving"/>
        </section>
    )
}