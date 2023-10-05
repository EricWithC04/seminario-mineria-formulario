import { useState } from 'react'
import { Survey } from './pages/Survey'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Survey />
    </>
  )
}

export default App
