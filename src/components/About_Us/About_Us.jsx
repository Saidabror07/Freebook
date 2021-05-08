import React from 'react'
import Header from './header/Header'
import Navbar from './navbar/Navbar'
import s from './About_us.module.css'
import Search from '../Global/search/Search'

const About_Us = () => {
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

export default About_Us
