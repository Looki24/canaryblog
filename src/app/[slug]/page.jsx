import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/coments/Comments'

const singlePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, placeat.</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>David Thomas</span>
                    <span className={styles.date}>01.05.2023</span>
                </div>
            </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            </div>
            <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.desc}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure quod minima blanditiis? Iure, optio alias sequi error aperiam possimus molestiae quia, consequatur, facilis sit dolor libero voluptatem temporibus!</p>
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure quod minima blanditiis? Iure, optio alias sequi error aperiam possimus molestiae quia, consequatur, facilis sit dolor libero voluptatem temporibus!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus iure quod minima blanditiis? Iure, optio alias sequi error aperiam possimus molestiae quia, consequatur, facilis sit dolor libero voluptatem temporibus!</p>
                </div>
                <div className={styles.comment}>
                <Comments />
                </div>
            </div>
            <Menu />
            </div>
    </div>
  )
}

export default singlePage