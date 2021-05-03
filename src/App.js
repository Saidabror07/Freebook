import { Route } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Bookstore from './components/Bookstore/Bookstore'

const App = () => {
  return (
    <div className='wrapper'>
      <Route path={'/'} render={() => <Home />} />
      {/* <Route path={'/Bookstore'} render={() => <Bookstore />} /> */}
      <div className='content'>
        <Footer />
      </div>
      <div>lorem impusm</div>
    </div>
  )
}

export default App
