import Image from "next/image";
import React from "react";
import { FaTruck, FaCreditCard, FaHeadset } from "react-icons/fa";
import styles from "../styles/FeaturesSection.module.css"; 
export default function FeaturesSection() {
  const features = [
    {
      icon: <FaTruck size={40} color="#ff6600" />,
      title: "Livraison Gratuite",
      description: "Partout en France dès 50€ d'achat",
    },
    {
      icon: <FaCreditCard size={40} color="#ff6600" />,
      title: "Paiement Sécurisé",
      description: "Vos paiements sont protégés",
    },
    {
      icon: <FaHeadset size={40} color="#ff6600" />,
      title: "Support 24/7",
      description: "Toujours là pour vous",
    },
  ];

  return (
    <section>
      <h2>Nos Services</h2>
      <div>
        {features.map(({ icon, title, description }) => (
          <div key={title}>
            <span className={styles.icon}>{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
