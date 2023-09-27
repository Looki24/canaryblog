import React from 'react'
import styles from './category.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Category = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Islands</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          Gran Canaria
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          Tenerife
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          Lanzarote
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          Forteventura
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          La Palma
          </Link>

          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="" width={32} height={32} className={styles.image} />
          La Graciosa
          </Link>
      </div>
    </div>
  )
}

export default Category;