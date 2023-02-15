import BannerIMG from './banner artvisa.png'
import styles from './Banner.module.scss'

export default function Banner() {
    return (
        <div className={styles.banner__div}>
          <img src={BannerIMG} alt="Novo planeta prestes a ser explorado" />
        </div>
    )
}