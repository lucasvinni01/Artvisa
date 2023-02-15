import styles from './Header.module.scss'
import logo from './logo artvisa.png'
import searchIcon from './search.png'

export default function Header () {
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo Artvisa" />
            <div className={styles.cabecalho__container}>
                <input type="text" className={styles.cabecalho__input} name="" id="" placeholder="O que você procura?"/>
                <img src={searchIcon} alt="Icone de busca" />
            </div>
        </header>
    )
}