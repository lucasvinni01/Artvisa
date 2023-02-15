import React from 'react'
import styles from './Menu.module.scss'
import {home, populares, descobrir, recomendado, favorito} from '../../icones'

const itensLista = [
    {
        nome: 'Home',
        src: home
    },
    {
        nome: 'Populares',
        src: populares
    },
    {
        nome: 'Descobrir',
        src: descobrir
    },
    {
        nome: 'Recomendados',
        src: recomendado
    },
    {
        nome: 'Meus Favoritos',
        src: favorito
    }  
]

export default function Menu() {
    return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            { itensLista.map(item => {
                return (
                    <li className={styles.menu__item} key={item.nome}>
                        <img src={item.src} alt="" />
                        <a href="#">{item.nome}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
)}

// itensLista.map(item => {
//     return (
//     <nav className={styles.menu}>
//         <ul className={styles.menu__lista}>
//             <li className={styles.menu__item}>
//                 <img src={item.src} alt="" />
//                 <a href="#">{item.nome}</a>
//             </li>
//         </ul>
//     </nav>
//     )
// })
