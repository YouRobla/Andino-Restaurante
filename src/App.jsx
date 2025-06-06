// App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'

import Menu from './pages/Menu'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  )
}

export default App
