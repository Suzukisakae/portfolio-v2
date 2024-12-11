import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

export default App
