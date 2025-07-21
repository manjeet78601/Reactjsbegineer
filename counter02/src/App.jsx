// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

function App() {
 let [counter,setCounter] = useState (15)// Add state to  function component 
  //let counter = 15
  const addValue=()=>{
    //console.log("value added ", Math.random())
    console.log("clicked", counter)
   // counter = counter + 1;
    setCounter(counter + 1)
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1> welcome to techstack </h1>
    <h2> counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Remove value</button>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
