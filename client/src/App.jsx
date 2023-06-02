import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainComp from './components/MainComp'
import Footer from './components/Footer'
import PageFooter from './components/PageFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="todoapp">
      <Header/>
      <MainComp/>
      <Footer/>
    </div>
    <PageFooter/>
     
    </>
  )
}

export default App
