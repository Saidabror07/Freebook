import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Header from './header/Header'
import s from './Home.module.css'
import Search from './search/Search'
import Popular from './popular-books/Popular'
import Featured from './featured-books/Featured'
import PopularCourse from './popular-courses/PopularCourse'
import Company from './company/company'
import Description from './description/Description'
import NewBook from './new-books/NewBook'
import Feepaying from './fee-paying-books/Feepaying'
import FromOurBlog from './from-blog/FromOurBlog'
import '../../App.css'
import './Home.css'

const Home = () => {
  return (
    <div className={s.container}>
      <Carousel fade className={s.carousel}>
        <Carousel.Item className={s.carousel__item}>
          <div className={s.image_1}></div>
          <Container className={s.headerContainer}>
            <Header />
            <div className={s.description}>
              <span>Reading is the best for get idea</span>
              <h1>Keep Reading</h1>
              <button className={s.button}>See more</button>
            </div>
          </Container>
        </Carousel.Item>

        <Carousel.Item className={s.carousel__item}>
          <div className={s.image_2}></div>
          <Container className={s.headerContainer}>
            <Header />
            <div className={s.description}>
              <span>Writing to improve your imagination</span>
              <h1>Let's Writing</h1>
              <button className={s.button}>See more</button>
            </div>
          </Container>
        </Carousel.Item>

        <Carousel.Item className={s.carousel__item}>
          <div className={s.image_3}></div>
          <Container className={s.headerContainer}>
            <Header />
            <div className={s.description}>
              <span>Reading is the best for get idea</span>
              <h1>Start Reading</h1>
              <button className={s.button}>See more</button>
            </div>
          </Container>
        </Carousel.Item>
      </Carousel>
      <div className={s.bgColor_1}>
        <Search />
      </div>
      <div className={s.bgColor_2}>
        <Popular />
      </div>
      <div className={s.bgColor_3}>
        <Featured />
      </div>
      <div className={s.bgColor_4}>
        <PopularCourse />
      </div>
      <div className={s.bgColor_5}>
        <Company />
      </div>
      <div className={s.bgColor_6}>
        <Description />
      </div>
      <div className={s.bgColor_7}>
        <NewBook />
      </div>
      <div className={s.bgColor_8}>
        <Feepaying />
      </div>
      <div className={s.dotted_line}></div>
      <div className={s.bgColor_9}>
        <FromOurBlog />
      </div>
      <div className={s.dotted_line}></div>
      <Container className={s.cookingBook}>
        <NavLink to='/'>
          <img src='./Freebook/img/cookingBook.jpg' />
        </NavLink>
      </Container>
    </div>
  )
}

export default Home
