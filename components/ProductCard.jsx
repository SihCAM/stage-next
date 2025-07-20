import Image from "next/image";
import React from "react";
import "../styles/ProductCard.css";

export default function ProductCard({ image, title, price }) {
    return (
        <div className="product-card">
            <Image
            src={image}
            alt="Hero"
            width={250}
            height={250}
            className="product-image"
            />
            <h3>{title}</h3>
            <p className="price">{price} €</p>
            <button className="btn-add">Ajouter au panier</button>
        </div>
    );
}
