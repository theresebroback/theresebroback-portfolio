import hero from "../data/hero";
import heroImage from "../assets/images/me3.jpg";

function Hero() {
    return (
        <section className="hero">
            <div className="container hero__container">

                <div className="hero__content">
                    <p className="hero__eyebrow">
                        {hero.eyebrow}
                    </p>

                    <h1 className="hero__title">
                        {hero.title}
                    </h1>

                    <p className="hero__intro">
                        {hero.text}
                    </p>
                </div>

                <div className="hero__image">
                    <img
                        src={heroImage}
                        alt="Therese Broback workspace"
                        className="hero__img"
                    />
                </div>



            </div>
        </section>
    );
}

export default Hero;