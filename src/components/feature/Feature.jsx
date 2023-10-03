import React from 'react'
import styles from './feature.module.css'
import Image from 'next/image';

const Feature = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container}>Discover best holiday distination</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/gran.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}> World's best islands for the holiday</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sed provident beatae aliquam error eaque fuga nisi necessitatibus eius velit.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Feature;