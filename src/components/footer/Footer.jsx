import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="canary blog" width={50} height={50} />
          <h1 className={styles.logoText}>Canary Blog</h1>
        </div>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure distinctio modi nulla obcaecati alias!</p>
        <div className={styles.icons}>
        <Image src="/facebook.png" alt="facebook" width={18} height={18} />
        <Image src="/instagram.png" alt="instagram" width={18} height={18} />
        <Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
        <Image src="/youtube.png" alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Travel</Link>
          <Link href="/">Food</Link>
          <Link href="/">Culture</Link>
          <Link href="/">Fashion</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
        </div>
  )
}

export default Footer;