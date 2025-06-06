import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-500'>Hola aca empieza el restaurante</h1>
      <Header></Header>

    </>
  )
}

export default App
