import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
    })
  }, [])
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
