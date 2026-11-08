import './App.css'
import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'

function App() {

  return (
    <Routes>
      <Route element={ <HomePage /> } path="/" exact/>
    </Routes>
  )
}

export default App
