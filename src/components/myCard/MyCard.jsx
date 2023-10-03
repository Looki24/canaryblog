import Image from "next/image"
import styles from "./myCard.module.css"
import Link from "next/link"

const MyCard = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imageContainer}>
    <Image src="/gran.jpg" alt="gran" fill className={styles.image} />
  </div>
  <div className={styles.textContainer}>
    <div className={styles.detail}>
        <span className={styles.date}>11.02.2023 - </span>
        <span className={styles.category}>Culture</span>
    </div>
    <Link href="/">
    <h1>This is the wonderful place for the holiday during winter time</h1>
    </Link>
    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis reiciendis eligendi reprehenderit perspiciatis nihil amet, sit repellendus iusto incidunt quis nobis magnam illum voluptatibus voluptates odio aliquid quibusdam deserunt. Provident nam atque enim. Voluptatum.</p>
    <Link href="/" className={styles.link}>Read More</Link>
  </div>
    </div>
  )
}

export default MyCard