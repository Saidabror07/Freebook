import React from 'react'
import s from './Bookstore.module.css'
import Header from './header/Header'
import { Container } from 'react-bootstrap'

const Bookstore = () => {
  return (
    <div className={s.container}>
      <Container>
        <Header />
      </Container>
    </div>
  )
}

export default Bookstore
