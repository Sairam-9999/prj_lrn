import './CSS/App.css'
import Home from './pages/Home'
import FvBookmark from './pages/FvBookmark'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from './Context/MovieContext'

function App() {
  
  return (
    <MovieProvider>
      <NavBar />
      <main className='main'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favorites' element={<FvBookmark />}/>
      </Routes>
    </main>
    </MovieProvider>
    
  )
}

export default App
