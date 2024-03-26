import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <ItemListContainer text="¡Bienvenido/a a Viviendo Sano!"/>
      </main>
    </>
  )
}

export default App
