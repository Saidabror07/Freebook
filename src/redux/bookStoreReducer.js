const SHOW_BOOKS = 'SHOW_BOOKS'

let initialState = {
  profile: null,
  books: [
    {
      id: 1,
      src: '',
      title: 'Book_1',
      author: 'John Smith',
      salary: '2$',
    },
    {
      id: 2,
      src: '',
      title: 'Book_2',
      author: 'John Smith',
      salary: '12$',
    },
    {
      id: 3,
      src: '',
      title: 'Book_3',
      author: 'John Smith',
      salary: '20$',
    },
    {
      id: 4,
      src: '',
      title: 'Book_4',
      author: 'John Smith',
      salary: '6$',
    },
    {
      id: 5,
      src: '',
      title: 'Book_5',
      author: 'John Smith',
      salary: '3$',
    },
    {
      id: 6,
      src: '',
      title: 'Book_6',
      author: 'John Smith',
      salary: '30$',
    },
    {
      id: 7,
      src: '',
      title: 'Book_7',
      author: 'John Smith',
      salary: '200$',
    },
    {
      id: 8,
      src: '',
      title: 'Book_8',
      author: 'John Smith',
      salary: '20$',
    },
    {
      id: 9,
      src: '',
      title: 'Book_9',
      author: 'John Smith',
      salary: '15$',
    },
  ],
}

const bookStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BOOKS: {
      return {
        ...state,
        books: [
          ...state.books,
          { src: 'http', title: 'Book_1', author: 'John Smith', salary: '2$' },
        ],
      }
    }
    default:
      return state
  }
}

export const bookStoreAC = () => {
  return { type: UPDATE_POST_TEXT }
}

export default bookStoreReducer
