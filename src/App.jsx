import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './componets/Section'
import IndexPage from './pages/IndexPage'
import Header from './componets/header'

function App() {

  return (
    <>
   <IndexPage></IndexPage>
      <h1 className='bg-red-500'>Hola aca empieza el restaurante</h1>
      <Header></Header>

    </>
  )
}

export default App
