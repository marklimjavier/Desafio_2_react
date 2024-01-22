import { useState } from 'react'
import Registro from '../components/Registro'

import './App.css'

function App() {
  const [error] = useState("")
  return (
    <>
      <Registro/>
    </>
  )
}

export default App
