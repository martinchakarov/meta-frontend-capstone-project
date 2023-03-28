import image1 from '../images/about/about1.jpg';
import image2 from '../images/about/about2.jpg';


export default function About() {
    return (
        <section className="about">
            <div className="about-details">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>The restaurant was established in 2018 by Adrian and Mario. Their passion for healthy Mediterranean keeps the place going and all of its personnel motivated to serve you the best meals possible.</p>
            </div>
            <div className="about-photos">
                <img src={image1} alt="Mario and Adrian"/>
                <img src={image2} alt="Mario and Adrian"/>
            </div>
        </section>

    )
}