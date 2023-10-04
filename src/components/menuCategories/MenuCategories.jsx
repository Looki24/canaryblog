import Link from 'next/link'
import styles from "./menuCategories.module.css"

const MenuCategories = () => {
  return (
    <div className={styles.category}>
    <Link href="/blog?cat=style" className={`${styles.categoriesItem} ${styles.style}`}>Style
    </Link>

    <Link href="/blog" className={`${styles.categoriesItem} ${styles.travel}`}>Travel
    </Link>

    <Link href="/blog" className={`${styles.categoriesItem} ${styles.food}`}>Food
    </Link>

    <Link href="/blog" className={`${styles.categoriesItem} ${styles.culture}`}>Culture
    </Link>

    <Link href="/blog" className={`${styles.categoriesItem} ${styles.coding}`}>Coding
    </Link>

    <Link href="/blog" className={`${styles.categoriesItem} ${styles.fashion}`}>Fashion
    </Link>
    {/* </div> */}


       {/* <h2 className={styles.subtitle}>Chosen by editor</h2>
       <h1 className={styles.title}>Editor Pick</h1>
       <MenuPost withImage={true} /> */}
      </div>    
  )
}

export default MenuCategories