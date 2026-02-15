import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    fetch("http://localhost:4000/api/message")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>setMessage(data.message))
    .catch((error)=>{console.log(error)})
  },[])

  return (
    <>
      <h1>hello from prajjwal - frontend</h1>
      <h3>data {message}</h3>
    </>
  )
}

export default App
