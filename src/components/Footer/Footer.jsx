import React from 'react'
import { Container } from 'react-bootstrap'
import s from './Footer.module.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <Container className={s.container}>
      <ul className={s.footer}>
        <li>
          <NavLink to='/Home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/Blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/About'>About US</NavLink>
        </li>
        <li>
          <NavLink to='/Contact'>Contact Us</NavLink>
        </li>
      </ul>
      <div className={s.copyright}>
        Copyright © FreeBook created by Saidabror
      </div>
    </Container>
  )
}

export default Footer
