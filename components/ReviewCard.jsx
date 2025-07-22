import Image from "next/image";
import React from "react";
import styles from "../styles/ReviewCard.css";

export default function ReviewCard({ name, comment, rating }) {
  return (
    <div className={styles.reviewCard}>
      <h4>{name}</h4>
      <p>"{comment}"</p>
      <span>{rating}/5</span>
    </div>
  );
}
