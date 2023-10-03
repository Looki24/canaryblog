import Link from "next/link"
import styles from "./comment.module.css"
import Image from "next/image"

const Comments = () => {
    const status = "authenticated"
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="Write a comment..." className={styles.input} />
                <button className={styles.button}>Send</button>
            </div>
        ) : (<Link href="/login">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                {/* user */}
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Harry Jackson</span>
                        <span className={styles.date}>03.09.2023</span>
                    </div>
                </div>
                {/* user ends */}
                <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut blanditiis consequatur repellendus voluptatum soluta ex assumenda amet exercitationem dolore atque magnam maiores mollitia recusandae quia, rerum nobis. Odit, error tempore?</p>
            </div>
        </div>
    </div>
  )
}

export default Comments