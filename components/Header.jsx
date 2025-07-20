import React from "react";
import "./Header.css";

export default function Header({ text }) {
    return (
        <header className="header">
            <h1>{text}</h1>
        </header>
    );
}
