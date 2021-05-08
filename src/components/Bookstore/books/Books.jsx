import React from 'react'
import { Container } from 'react-bootstrap'
import s from './Books.module.css'
import { Form } from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
const Books = props => {
  let active = 1
  let items = []
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    )
  }

  return (
    <Container className={s.container}>
      <div className={s.bookSide}>
        {props.books.map(u => (
          <div key={u.id} className={s.myBooks}>
            <div className={s.photo}>
              245x330
              <img src={u.src} />
            </div>
            <h1 className={s.title}>{u.title}</h1>
            <p className={s.author}>{u.author}</p>
            <span>{u.salary}</span>
            <button className={s.button}>detail</button>
          </div>
        ))}
        <div className={s.pagination}>
          <Pagination>{items}</Pagination>
        </div>
      </div>
      {/* <div className={s.sidebar}>
        <div className={s.filter}>
          <span>filter by price</span>
          <button>filter</button>
        </div>
        <div className={s.topProducts}>
          <div>
            <img src='image/book_2' />

            <span>title</span>
            <Form>
              <Form.Group controlId='formBasicRange'>
                <Form.Label>Range</Form.Label>
                <Form.Control type='range' />
              </Form.Group>
            </Form>
          </div>
        </div>
      </div> */}
    </Container>
  )
}

export default Books
