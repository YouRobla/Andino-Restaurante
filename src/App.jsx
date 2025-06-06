import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/header'
import ContactPage from './componets/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
