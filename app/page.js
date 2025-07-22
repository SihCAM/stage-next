import Image from "next/image";
import styles from "../styles/page.module.css";
import Test from "../components/Test"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import FeaturesSection from "../components/FeaturesSection";
import ReviewCard from "../components/ReviewCard";
import SectionWrapper from "../components/SectionWrapper";

export default function Home() {
  // document.addEventListener("DOMContentLoaded", () => {})

  //  useEffect(() => {

  //  }, [])

  const products = [
    {
      image: "/product1.jpg",
      title: "Produit 1",
      price: 29.99,
    },
    {
      image: "/product2.jpg",
      title: "Produit 2",
      price: 49.99,
    },
    {
      image: "/product3.jpg",
      title: "Produit 3",
      price: 19.99,
    },
    {
      image: "/product4.jpg",
      title: "Produit 4",
      price: 25.99,
    },
  ]

  const categories = [
    { image: "/category1.jpg", name: "chaussures" },
    { image: "/category2.jpg", name: "Accessoires" },
    { image: "/category3.jpg", name: "Vêtements" }
  ];

  const reviews = [{
    name: "Alice", comment: "Super boutique !", rating: "5",
    name: "Marc", coment: "Produits de qualité.", rating: "4.5",
    name: "Julie", coment: "Livraison rapide !", rating: "5",
  }];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Bienvenue sur MyShop"
        subtitle="Découvrez nos produits tendance !"
        image="/hero.jpg"
      />

      {/* Header */}
      <Header text="Nos Produits" />
      <div>

        {/* Liste de produits */}


        {/*{
          products.map((product, index) => (
            <ProductCard 
              key={product.title}
             image={product.image} 
             title={product.title} 
              price={product.price}
           />
          ))
        }*/}

        {
          products.map(({ image, title, price }, index) => (
            <ProductCard
              key={title}
              image={image}
              title={title}
              price={price}
            />
          ))
        }
      </div>

      {/* Liste de catégories */}
      <Header text="Nos Catégories" />
      <div>
        {categories.map(({ image, name }) => (
          <CategoryCard
            key={name}
            image={image}
            name={name} />
        ))}
      </div>

      {/* Section des fonctionnallités */}
      <FeaturesSection />


      {/* Liste d'avis */}
      <Header text="Avis Clients" />
      <div className={styles.reviews}>
        {reviews.map(({ name, comment, rating }) => (
          <ReviewCard
            key={name}
            name={name}
            comment={comment}
            rating={rating} />
        ))}
      </div>

      <SectionWrapper text="Section 1">
        <>
          <p>test 1</p>
          <p>test 2</p>
        </>
      </SectionWrapper>

      <SectionWrapper text="Section 1">
        <>
          <p>test 1</p>
          <p>test 2</p>
        </>
      </SectionWrapper>

      <SectionWrapper text="Section 1">
        {/* TODO: mettre un fragment quand tu as plusieurs parents ou quand du code JS (comme ici) */}
        <>
          {reviews.map(({ name, comment, rating }) => (
            <ReviewCard
              key={name}
              name={name}
              comment={comment}
              rating={rating} />
          ))}
        </>
      </SectionWrapper>

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
