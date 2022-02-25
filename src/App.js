import Navbar from './components/Navbar'
import { Landing } from './pages'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<div>About Me</div>}></Route>
        <Route path='/portfolio' element={<div>My Portfolio</div>}></Route>
        <Route path='/resume' element={<div>My Resume</div>}></Route>
        <Route path='/contact' element={<div>My Contact</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
