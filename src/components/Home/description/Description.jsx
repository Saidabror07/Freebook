import React from 'react'
import { Book, Pencil, Tags } from 'react-bootstrap-icons'
import s from './Description.module.css'

const Description = () => {
  return (
      <div className={s.container}>
        <div className={s.column_1}>
          <div className={s.icon}>
            <Book color='royalblue' />
          </div>
          <h1>Tons of Books</h1>
          <p>
            From advanced selectors to generated content to web fonts, and from
            gradients, shadows, and rounded corners. to elegant animations.
          </p>
        </div>
        <div className={s.column_2}>
          <div className={s.icon}>
            <Pencil color='limegreen' />
          </div>
          <h1>Hundreds of Authors</h1>
          <p>
            To elegant animations. , CSS3 holds a universe of creative
            possibilities. No one can better guide you through.
          </p>
        </div>
        <div className={s.column_3}>
          <div className={s.icon}>
            <Tags color='darkorange' />
          </div>
          <h1>Easily Bookmarked</h1>
          <p>
            Shadows, and rounded corners. to elegant animations. , CSS3 holds a
            universe of creative possibilities. No one can better guide you
            through.
          </p>
        </div>
      </div>
  )
}
export default Description
