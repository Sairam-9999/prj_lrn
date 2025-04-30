import './CSS/App.css'
import Home from './pages/Home'
import FvBookmark from './pages/FvBookmark'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <div>
      <NavBar />
      <main className='main'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<FvBookmark />}/>
      </Routes>
    </main>
    </div>
    
  )
}

export default App
