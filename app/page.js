import Image from "next/image";
import styles from "./page.module.css";
import Test from "../components/Test"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard";

export default function Home() {
  // document.addEventListener("DOMContentLoaded", () => {})

//  useEffect(() => {

//  }, [])

  return (
<div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero 
        title="Bienvenue sur MyShop" 
        subtitle="Découvrez nos produits tendance !" 
        image="hero.jpg"
      />

      {/* Header */}
      <Header text="Nos Produits" />

      {/* Liste de produits */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <ProductCard image="/product1.jpg" title="Produit 1" price="29.99" />
        <ProductCard image="/product2.jpg" title="Produit 2" price="49.99" />
        <ProductCard image="/product3.jpg" title="Produit 3" price="19.99" />
      </div>
    </div>
  );



    {/* <div className={styles.page}>
      <main className={styles.main}>

        <Test title="Cours numéro 2"/>
        <Test title="Une autre valeur"/>

        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */}
  
}
