import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import '../../../App.css'
import s from './NewBook.module.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const NewBook = props => {
  return (
    <Container className={s.container}>
      <h1>New Books</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        className={s.carousel}
        containerClass=''
        dotListClass=''
        draggable
        focusOnSelect={true}
        infinite
        slidesToSlide={1}
        itemClass=''
        keyBoardControl={true}
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
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
      </Carousel>
    </Container>
  )
}

export default NewBook
