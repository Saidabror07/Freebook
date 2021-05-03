import React from 'react'
import { Container } from 'react-bootstrap'
import { Shuffle } from 'react-bootstrap-icons'
import s from './company.module.css'

const Company = () => {
  return (
    <Container className={s.container}>
      <h1 className={s.h1}>Do you want to know more about my company ?</h1>
      <p className={s.p}>
        <span>Browse collection</span>
        <Shuffle className={s.shuffle} />
      </p>
    </Container>
  )
}

export default Company
