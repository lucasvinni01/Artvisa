import styles from './HomePage.module.scss'
// add media queries

import Header from 'componentes/Header'
import Menu from 'componentes/Menu'
import Banner from 'componentes/Banner'
import Galery from 'componentes/Galery';


export default function HomePage() {
  return (
    <>
    <Header/>
    <main>
      <section className={styles.principal}>
        <Menu/>
        <Banner/> 
        {/* a posteriori banner = carrousel */}
      </section>
      <div className={styles.galeria}>
        <Galery/>
      </div>
    </main>
    </>
  );
}