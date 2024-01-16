import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from "./Pages/Admin/Admin"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Admin />
    </>
  )
}

export default App
