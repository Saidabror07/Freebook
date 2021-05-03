import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import s from './Popular.module.css'
const Popular = () => {
  return (
    <Container className={s.container}>
      <h1>Popular Books</h1>
      <div className={s.cardDeck}>
        <Card className={s.card}>
          <div className={s.image_1}></div>
          <Card.Body className={s.cardBody}>
            <Card.Title className={s.cardTitle}>
              Lyrics of the Lalala Musical
            </Card.Title>
            <Card.Text className={s.cardText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              temporibus
            </Card.Text>
            <button className={s.button}>Detail</button>
          </Card.Body>
        </Card>

        <Card className={s.card}>
          <div className={s.image_2}></div>
          <Card.Body>
            <Card.Title className={s.cardTitle}>
              Lyrics of the Lalala Musical
            </Card.Title>
            <Card.Text className={s.cardText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              temporibus
            </Card.Text>
            <button className={s.button}>Detail</button>
          </Card.Body>
        </Card>

        <Card className={s.card}>
          <div className={s.image_3}></div>
          <Card.Body>
            <Card.Title className={s.cardTitle}>
              Lyrics of the Lalala Musical
            </Card.Title>
            <Card.Text className={s.cardText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              temporibus
            </Card.Text>
            <button className={s.button}>Detail</button>
          </Card.Body>
        </Card>

        <Card className={s.card}>
          <div className={s.image_4}></div>
          <Card.Body>
            <Card.Title className={s.cardTitle}>
              Lyrics of the Lalala Musical
            </Card.Title>
            <Card.Text className={s.cardText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              temporibus
            </Card.Text>
            <button className={s.button}>Detail</button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default Popular
