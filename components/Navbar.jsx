import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {

    const links = [
        {
            href: "#",
            name:"Accueil",
        },
        {
            href: "#",
            name:"Produits",
        },
        {
            href: "#",
            name:"Contact",
        },
        {
            href: "#",
            name:"Panier",
        }
    ]
    return (
        <nav className="navbar">
            <div className="logo">MyShop</div>
            <ul className="nav-links">
                {
                    //Toujours mettre la fonction anonyme avec les parenthèse , on autoreturn sauf quand on doit ecrire des calculs
                    links.map(({ href, name }) => (
                    <li key={name}><a href={href}>{name}</a></li>
                    

                    ))
                }
                
                
            </ul>
        </nav>
    );
}
