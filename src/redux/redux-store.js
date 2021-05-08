import { createStore, combineReducers } from 'redux'
import bookStoreReducer from './bookStoreReducer'

const reducers = combineReducers({
  bookStorePage: bookStoreReducer,
})

let store = createStore(reducers)

window.store = store

export default store
