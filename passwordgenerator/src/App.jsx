import { useState,useCallback,useEffect,useRef } from 'react'
function App() {
   const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword]= useState("");

// useref hooks

const passwordRef= useRef(null)

  const passwordGenerator = useCallback (()=>{
   let pass=""
   let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberAllowed) str+="0123456789"
   if(charAllowed) str +="!@#$%^&*-_++[]{}~`"
   for(let i= 1; i<= length; i++){
    let char = Math.floor(Math.random()*str.length + 1)
   pass += str.charAt(char)
   }
   setPassword(pass);
  },[numberAllowed, charAllowed, length,setPassword])    //usecallback react hooks that lets you cache a function definition between re-renders.

 const copyPasswordToClipboard= useCallback(()=>{
  passwordRef.current?.select();// use of passwordref
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password) // use on window client side 
 },[password])

  useEffect (()=>{  //Page load hota hi to first time call hota hi 
  passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])    // synchronising 
  return (
    <>
    {/* <h1 className='text-4xl text-center text-white'>Password Generator</h1> */}
    <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
<h1 className='text-white text-center my-3'>Password Generator </h1>
<div classname="flex shadow rounded-lg overflow-hidden mb-4">
  <input type="text" value={password} className="outline-none w-full py-1 px-3"
  placeholder="Password" readonly
  ref={passwordRef}/>

  <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-500 text-white px-2
  py-0.5 shrink-0'>Copy</button>
</div>

<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
<input
type="range"
min={6}
max={100}
value={length}
className='cursor-pointer'
onChange={(e)=>{setlength(e.target.value)}}
/>
<label>length:{length}</label>

</div>
<div className="flex items-center gap-x-1">
<input type="checkbox"
defaultChecked={numberAllowed}
id="numberInput"
onChange={()=>{
  setNumberAllowed((prev)=>!prev);
}}
/>
<label htmlFor="numberInput">Numbers</label>
</div>
<div className="flex items-center gap-x-1">
  <input type="checkbox"
  defaultChecked={charAllowed}
  id="characterInput"
  onChange={()=>{
    setCharAllowed((prev)=>!prev);
  }}
  />
</div>
<label htmlFor="characterInput">Characters</label>
</div>
     </div>
    </>
  )
}

export default App
