import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">MyShop</div>
            <ul className="nav-links">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Produits</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Panier</a></li>
            </ul>
        </nav>
    );
}
