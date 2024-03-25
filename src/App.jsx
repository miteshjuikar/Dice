import { useState } from 'react'
import './App.css'
import DiceHome from './components/diceHome/DiceHome'
import StartGame from './components/startGame/StartGame'

function App() {

  const[isGameStart, setIsGameStart] = useState(false);

  function toggle(){
    setIsGameStart((pre) => !pre);
  }
  return (
    <>
    {isGameStart ? <StartGame/> : <DiceHome toggleClick={toggle} />}
    </>
  )
}

export default App
