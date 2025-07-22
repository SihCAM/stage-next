import Image from "next/image";
import styles from "../styles/CategoryCard.module.css";

export default function CategoryCard({ image, name }) {
  return (
    <div className={styles.categoryCard}>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className={styles.categoryImage}
      />
      <h3 className={styles.titleH3}>{name}</h3>
    </div>
  );
}
