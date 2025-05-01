import React, { useRef, useState } from 'react'
import { FaClock } from "react-icons/fa";
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa'
import { FaPowerOff } from 'react-icons/fa';

import './App.css'

function App() {
  const [time, setTime] = useState(0)
  let timeRef = useRef(null)

  const start = () => {
    timeRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }
  const pause = () => {
    clearInterval(timeRef.current)
  }
  const reStart = () => {
    setTime(0)
  }
  // const reSet=()=>{
  //   setTime(time == 0)
  // }

  return (
    <>
      <FaClock size="200px" />
      <h1>Stop Watch With React {time}</h1>
      
      <button onClick={start}> <FaPlay style={{paddingRight: "10px"}} />Start</button>
      <br />
      <br />
      <br />
      <button onClick={pause}>
        <FaPause style={{paddingRight: "10px"}} /> Pause
      </button>      
      <br />
      <br />
      <br />
      
      <button onClick={reStart}> <FaPowerOff style={{paddingRight: "10px"}} />Re-start</button>
      {/* <button onClick={reSet}>Stop</button> */}

    </>

  )
}

export default App
