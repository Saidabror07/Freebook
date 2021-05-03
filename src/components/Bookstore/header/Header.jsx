import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import { BasketFill } from 'react-bootstrap-icons'

const Header = () => {
  return (
    <Container className={s.container}>
      <Navbar expand='lg' className={s.navbar}>
        <NavLink to='/Freebook'>FreeBook</NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={s.nav}>
            <NavLink to='/Home'>HOME</NavLink>
            <NavLink to='/Bookstore'>BOOKSTORE</NavLink>
            <NavLink to='/Blog'>BLOG</NavLink>
            <NavLink to='/About'>ABOUT US</NavLink>
            <NavLink to='/Contact'>CONTACT</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <NavLink to='/bag' className={s.bag}>
        <BasketFill />
      </NavLink>
    </Container>
  )
}

export default Header
