import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./compnents/Home"
import ErrorPage from "./compnents/ErrorPage"
import Nav from "./compnents/Nav"
import './App.css'

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
    </>
  )
}

export default App