import React from 'react'
import styles from "./blogPage.module.css"
import Card from '@/components/card/Card'
import Menu from '@/components/menu/Menu'

const blogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <Card />
        <Menu />
      </div>
    </div>
  )
}

export default blogPage