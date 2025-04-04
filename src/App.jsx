import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import LatestProduct from './components/LatestProduct'
import WhatWeOffer from './components/WhatWeOffer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
       <Navbar />
       <Hero />
       <Featured />
       <LatestProduct />
       <WhatWeOffer />
    </div>
  )
}

export default App
