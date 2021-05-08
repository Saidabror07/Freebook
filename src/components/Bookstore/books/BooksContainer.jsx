import { connect } from 'react-redux'
import { bookStoreAC } from '../../../redux/bookStoreReducer'
import Books from './Books'
import React from 'react'

class BooksContainer extends React.Component {
  componentDidMount() {
    console.log('It is me!!')
  }
  render() {
    return <Books books={this.props.books} />
  }
}

let mapStateToProps = state => {
  return {
    books: state.bookStorePage.books,
  }
}

const Books_Container = connect(mapStateToProps, {
  bookStoreAC,
})(BooksContainer)

export default Books_Container
