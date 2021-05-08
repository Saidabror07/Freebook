import React from 'react'
import { Search } from 'react-bootstrap-icons'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import s from './Contact.module.css'
const Contact = () => {
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
    </>
  )
}

export default Contact
