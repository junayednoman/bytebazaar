import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './sections/Header'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App