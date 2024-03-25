import React from 'react'
import style from './DiceHome.module.css'

function DiceHome({toggleClick}) {
  return (
    <div className={style.gameGame}>
      <div>
        <img src="/images/dices.png" alt="Dice Image" />
      </div>
      <div className={style.gameName}>
        <h1>DICE GAME</h1>
        <button onClick={toggleClick}>Play Now</button>
      </div>
    </div>
  )
}

export default DiceHome
