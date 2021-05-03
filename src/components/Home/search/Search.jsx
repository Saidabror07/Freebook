import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import s from './Search.module.css'
import { Container } from 'react-bootstrap'

const Search = () => {
  return (
   <Container className={s.container}>
      <input type='text' placeholder='Book Title' />

      <Dropdown>
        <Dropdown.Toggle id='dropdown-basic' className={s.dropdown_1}>Book Category</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Drama</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Business</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Culture</Dropdown.Item>
          <Dropdown.Item href='#/action-1'>Drama</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Sport</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Horror</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Since</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle id='dropdown-basic' className={s.dropdown_2}>Book Author</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Jull Verne</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Ernest Xeminguey</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Pushkin</Dropdown.Item>
          <Dropdown.Item href='#/action-1'>Lermontov</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Alisher Navoiy</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Z.M. Bobur</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant='secondary' className={s.button}>Find Book</Button>
</Container>
  )
}
export default Search
