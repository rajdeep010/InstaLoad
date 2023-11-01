import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./compnents/Home"
import ErrorPage from "./compnents/ErrorPage"
import Nav from "./compnents/Nav"
import './App.css'
import Footer from "./compnents/Footer"


const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App