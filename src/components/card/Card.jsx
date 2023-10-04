import React from 'react'
import styles from './card.module.css'
import Pagination from '../pagination/Pagination';
import MyCard from '../myCard/MyCard';
// import Menu from '../menu/Menu';

const Card = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
      <Pagination />
    </div>
  )
}

export default Card;