import React from 'react'
import slides from './slides.json'
import styles from './carousel.module.scss'

export default function Carousel() {
  return (
    <div className={styles.slide} data-slide="slide">
        <div className={styles.slide}__items>
            {slides.map(slide => {
                return (
                    <img src={slide.src} alt="imagem"/>
                )
            })}
        </div>
        <nav className={styles.slide__nav}>
            <div className={styles.slide__thumb}></div>
            <button className={styles.slide__prev}>Anterior</button>
            <button className={styles.slide__next}>Próximo</button>
        </nav>
    </div>
  )
}

// class SlideStories {
//     constructor (id) {
//         this.slide = document.querySelector(`[data-slide = "${id}"]`)
//         this.active = 0
//         this.init()
//         console.log(this.slide)
//     }
//     activeSlide(index) {
//         this.active = index
//         this.items.forEach(item => item.classList.remove('active'))
//         this.items[index].classList.add('active')
//         this.thumbItems.forEach(item => item.classList.remove('active'))
//         this.thumbItems[index].classList.add('active')
//         this.autoSlide()
//     }

//     prev() {
//         if (this.active > 0) {
//         this.activeSlide(this.active - 1)
//         } else {
//             this.activeSlide(this.items.length - 1)
//         }
//     }

//     next() {
//         if (this.active < this.items.length - 1) {
//             this.activeSlide(this.active + 1)
//         } else {
//             this.activeSlide(0)
//         }
//     }

//     addNavigation() {
//         const prevBtn = this.slide.querySelector('.slide-prev')
//         const nextBtn = this.slide.querySelector('.slide-next')
//         prevBtn.addEventListener('click', this.prev)
//         nextBtn.addEventListener('click', this.next)
//     }

//     addThumbItems() {
//         this.items.forEach(() => this.thumb.innerHTML += `<span></span>`)
//         this.thumbItems = Array.from(this.thumb.children)
//         console.log(this.thumbItems)
//     }

//     autoSlide() {
//         clearTimeout(this.timeOut)
//         this.timeOut = setTimeout(this.next, 6000)
//     }

//     init() {
//         this.prev = this.prev.bind(this)
//         this.next = this.next.bind(this)
//         this.items = this.slide.querySelectorAll('.slide-items > *')
//         this.thumb = this.slide.querySelector('.slide-thumb')
//         this.addThumbItems()
//         this.activeSlide(0)
//         this.addNavigation()
//     }

// }

// new SlideStories('slide')
