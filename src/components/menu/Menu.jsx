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
      <h2 className={styles.subtitle}>Chosen by editor</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPost withImage={true} />
      </div>    
  )
}

export default Menu;