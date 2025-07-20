import React from "react";
import "./Hero.css";

export default function Hero({ title, subtitle, image }) {
    return (
        <section className="hero">
            <Image
            src={image}
            alt="Hero"
            width={1200}
            height={400}
            className="hero-image"
            priority
             />
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <button className="btn-primary">Voir les produits</button>
            </div>
        </section>
    );
}
