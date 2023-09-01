import Image from 'next/image'
import styles from './page.module.css'
import Botao from './components/Botao'

export default function Home() {
  return (
    <main className={styles.main}>
      <Botao name='solicitar guincho'/>
    </main>
  )
}
