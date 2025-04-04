import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import LatestProduct from './components/LatestProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar />
       <Hero />
       <Featured />
       <LatestProduct />
    </div>
  )
}

export default App
