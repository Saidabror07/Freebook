import React from 'react'
import { Container } from 'react-bootstrap'
import s from './Featured.module.css'
import '../../../App.css'

const Featured = () => {
  return (
    <Container className={s.container}>
      <div className={s.description}>
        <p className={s.title_1}>Featured Book</p>
        <h1 className={s.title_2}>
          The Complete Idiots Guide to Graphic Design
        </h1>
        <span className={s.author}>Anggi Krisna</span>
        <p className={s.meaning}>
          From advanced selectors to generated content to web fonts, and from
          gradients, shadows, and rounded corners to elegant animations, CSS3
          hold a universe of creative possibilities. No one can better guide you
          through these galaxies than Dan Cederholm.
        </p>
        <button className={s.button}>Get This Book</button>
      </div>
      <div className={s.photo_1}>
      </div>
      <div className={s.photo_2}>
      </div>
    </Container>
  )
}

export default Featured
