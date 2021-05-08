import { Route } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Bookstore from './components/Bookstore/Bookstore'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import About_us from './components/About_Us/About_Us'

const App = props => {
  return (
    <div className='wrapper'>
      <Route path={'/Home'} render={() => <Home />} />
      <Route path={'/Bookstore'} render={() => <Bookstore />} />
      <Route path={'/Blog'} render={() => <Blog />} />
      <Route path={'/Contact'} render={() => <Contact />} />
      <Route path={'/About'} render={() => <About_us />} />
      <div className='content'>
        <Footer />
      </div>
    </div>
  )
}

export default App
