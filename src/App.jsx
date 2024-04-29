import { useState } from 'react'
import Header from './components/Header.jsx'
import Galery from './components/Galery.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import './style.css'


function App(){
  return(
  <main>
   <Header />
   <Galery />
   <Footer />
  </main>
  )
}

export default App
