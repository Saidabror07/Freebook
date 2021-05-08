import React from 'react'
import { Container } from 'react-bootstrap'
import Search from '../Global/search/Search'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import s from './Blog.module.css'
import MyBlog from './myBlog/MyBlog'

const Blog = () => {
  return (
    <>
      <div className={s.bgColor_1}>
        <Header />
      </div>
      <div className={s.bgColor_2}>
        <Navbar />
      </div>
      <div className={s.bgColor_3}>
        <Search />
      </div>
      <div className={s.bgColor_3}>
        <MyBlog />
      </div>
    </>
  )
}

export default Blog
