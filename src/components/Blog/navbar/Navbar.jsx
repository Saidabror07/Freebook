import React from 'react'
import { Container } from 'react-bootstrap'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container className={s.container}>
      <h1 className={s.title}>Blog</h1>
      <p className={s.subTitle}>
        <NavLink to='/Home'>Home</NavLink>
        <span>/</span>
        <NavLink to='/Blog'>Blog</NavLink>
      </p>
    </Container>
  )
}

export default Navbar
