import React from 'react'
import styles from './menu.module.css'
// import Link from 'next/link';
// import Image from 'next/image';
import MenuPost from '../menuPost/MenuPost';
import MenuCategories from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>
    <h2 className={styles.subtitle}>{"What's hot"}</h2>
    <h1 className={styles.title}>Most Popular Places</h1>
    <MenuPost withImage={false} />
    <h2 className={styles.subtitle}>Dicover by topic</h2>
    <h1 className={styles.title}>Categories</h1>
    <MenuCategories />
    {/* <div className={styles.category}> */}
    {/*<Link href="/" className={styles.category}>
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
          <span className={styles.username}>David</span>
          <span className={styles.date}> - 10.05.2023</span>
        </div>
      </div>
    </Link>

    <Link href="/" className={styles.item}>
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.culture}`}>Culture</span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
          <span className={styles.username}>David</span>
          <span className={styles.date}> - 10.05.2023</span>
        </div>
      </div>
    </Link>

    <Link href="/" className={styles.item}>

      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.food}`}>Food</span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
          <span className={styles.username}>David</span>
          <span className={styles.date}> - 10.05.2023</span>
        </div>
      </div>
    </Link>

    <Link href="/" className={styles.item}>
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
        <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className={styles.detail}>
          <span className={styles.username}>David</span>
          <span className={styles.date}> - 10.05.2023</span>
        </div>
      </div>
    </Link> */}

  {/* <h2 className={styles.subtitle}>Discover by topics</h2>
  <h1 className={styles.title}>Categories</h1>
  <div className={styles.categoriesList}> */}
    {/* <Link href="/blog?cat=style" className={`${styles.categoriesItem} ${styles.style}`}>Style
    </Link>

    <Link href="/" className={`${styles.categoriesItem} ${styles.style}`}>Travel
    </Link>

    <Link href="/" className={`${styles.categoriesItem} ${styles.style}`}>Food
    </Link>

    <Link href="/" className={`${styles.categoriesItem} ${styles.style}`}>Culture
    </Link>
    </div>


      <h2 className={styles.subtitle}>Chosen by editor</h2>
      <h1 className={styles.title}>Editor Pick</h1> */}
      <MenuPost withImage={true} />
      </div>    
  )
}

export default Menu;