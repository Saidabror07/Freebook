import React from 'react'
import { Container } from 'react-bootstrap'
import s from './Feepaying.module.css'
const Feepaying = () => {
  return (
    <Container className={s.container}>
      <div className={s.layer}>
        <img src='./Freebook/img/feepaying_1.jpg' />
        <span className={s.sale}>80% off</span>
        <span className={s.title}>Travel Books</span>
        <button className={s.goToBook}>I want this books</button>
      </div>
      <div className={s.layer}>
        <img src='./Freebook/img/feepaying_2.jpg' />
        <span className={s.sale} style={{ backgroundColor: '#7d4dde' }}>
          45% off
        </span>
        <span className={s.title}>Cooking Books</span>
        <button className={s.goToBook}>I want this books</button>
      </div>
      <div className={s.layer}>
        <img src='./Freebook/img/feepaying_3.jpg' />
        <span className={s.sale} style={{ backgroundColor: '#dc4dde' }}>
          50% off
        </span>
        <span className={s.title}>Design Books</span>
        <button className={s.goToBook}>I want this books</button>
      </div>
    </Container>
  )
}

export default Feepaying
