 //import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from 'react'
// import React,{ useState } from "react";

function App() {
  const [color,setColor] = useState("olive");
    return (
     <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center 
         bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg"
            style={{backgroundColor:"red"}}>Red</button>
               <button onClick={()=>setColor("green")}  className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg"
            style={{backgroundColor:"green"}}>Red</button>
               <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg"
            style={{backgroundColor:"blue"}}>Red</button>
               <button onClick={()=>setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white
            shadow-lg"
            style={{backgroundColor:"grey"}}>Red</button>
          </div>

            
        </div>
           {/* <button onClick={()=>setColor("red")}>Change color</button> */}

      </div>
 
  );
}

export default App
