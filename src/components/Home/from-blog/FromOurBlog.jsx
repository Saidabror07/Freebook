import React from 'react'
import { Container } from 'react-bootstrap'
import s from './FromOurBlog.module.css'

const FromOurBlog = () => {
  return (
    <Container className={s.container}>
      <h1 className={s.general_title}>From Our Blog</h1>
      <div className={s.card_parent}>
        <div className={s.card}>
          <h4 className={s.title}>Hello World!</h4>
          <p className={s.date}>July 12, 2019</p>
          <span className={s.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut
            reprehenderit quisquam vitae non quibusdam ratione illo praesentium,
            aperiam
          </span>
        </div>
        <div className={s.card}>
          <img src='./Freebook/img/blog_1.jpg' />
          <h4 className={s.title}>Hello World!</h4>
          <p className={s.date}>July 12, 2019</p>
          <span className={s.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut
            reprehenderit quisquam vitae non quibusdam ratione illo praesentium,
            aperiam
          </span>
        </div>
        <div className={s.card}>
          <img src='./Freebook/img/blog_2.jpg' />
          <h4 className={s.title}>Hello World!</h4>
          <p className={s.date}>July 12, 2019</p>
          <span className={s.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut
            reprehenderit quisquam vitae non quibusdam ratione illo praesentium,
            aperiam
          </span>
        </div>
        <div className={s.card}>
          <img src='./Freebook/img/blog_3.jpg' />
          <h4 className={s.title}>Hello World!</h4>
          <p className={s.date}>July 12, 2019</p>
          <span className={s.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut
            reprehenderit quisquam vitae non quibusdam ratione illo praesentium,
            aperiam
          </span>
        </div>
      </div>
    </Container>
  )
}

export default FromOurBlog
