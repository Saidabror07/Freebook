import React from 'react'
import s from './Bookstore.module.css'
import Header from './header/Header'
import { Container } from 'react-bootstrap'
import Navbar from './navbar/Navbar'
import Search from '../Global/search/Search'
import Books_Container from './books/BooksContainer'

const Bookstore = () => {
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
      <div className={s.bgColor_4}>
        <Books_Container />
      </div>
    </>
  )
}

export default Bookstore
