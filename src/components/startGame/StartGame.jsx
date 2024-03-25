import React from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'


export default function StartGame() {
  const[selectedNum, setSelectedNum] = useState();
  const [imageNum, setImageNum] = useState(1);
  const [score, setScrore] = useState(0);
  const[error, setError] = useState();
  const [showRule, setShowRule] = useState(false);

  const getRandomArbitrary =(min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollImage = () => {
 
    if(!selectedNum) 
    return setError("You have not selected any number");

    const randomNumber = getRandomArbitrary(1,7)
    setImageNum(randomNumber)
    console.log(selectedNum, randomNumber)
    if(selectedNum == randomNumber){
      setScrore((pre) => pre + randomNumber)
    }
    else if(score != 0){
      setScrore((pre) => pre>=randomNumber? pre - 2 : 0)
    }
    setSelectedNum(undefined)
  }

  const resetScore = () =>{

    setScrore(0);
  }

  return (
    <MainContainer>
      <div className='topSection'>
        <Score score={score} />
        <NumberSelector selectedNum={selectedNum} setSelectedNum={setSelectedNum} error={error} setError={setError}/>
      </div>
      <RollDice imageNum={imageNum} setImageNum={setImageNum} rollImage={rollImage} />
      <div className='diceButton'>
          <button className='resetButton' onClick={resetScore}>Reset Score</button>
          <button className='rulesButton' onClick={()=> setShowRule(!showRule)}>{showRule ? "Show Rules" : "Show Hide"}</button>
      </div>
      {showRule && <Rules />}
    </MainContainer>
    
  )
}
const MainContainer = styled.main`
  margin-bottom: 20px;
  .topSection{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 70px;
  }
  .diceButton{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .diceButton button{
    font-weight: 500;
    font-size: 24px;
    margin: 0 auto;
    width: 220px;
    height: 44px;
  }
`