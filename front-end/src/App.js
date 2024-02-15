import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Messages from './Messages'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import AboutUs from './AboutUs'

const App = props => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
