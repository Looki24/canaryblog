import Menu from '@/components/menu/Menu'
import styles from './homepage.module.css'
import Feature from '@/components/feature/Feature'
import Category from '@/components/category/Category'
import Card from '@/components/card/Card'
import Link from 'next/link'

export default function Home() {
  return (
  <div className={styles.container}>
    <Feature />
    <Category />
    
    <div className={styles.content}>
      <Card />
      <Menu />
    </div>
    </div>
  )
}