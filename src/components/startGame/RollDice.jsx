import React, { useState } from 'react'
import styled from 'styled-components'

export default function RollDice({imageNum, rollImage}) {
  return (
  <MainContainer>
    <main>
        <div className='diceImage'>
            <div className='diceImageDiv' onClick={rollImage} >
              <img src={`./images/dice_${imageNum}.png`} alt="Cube Gamnling Image" />
            </div>
            <p>Click on Dice to roll</p>
        </div>
     
    </main>
  </MainContainer> 
  )
}

const MainContainer = styled.main`
main{
    margin: 0 auto;
    width: 250px;
    height: 449px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 36px;
    
  .diceImage{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
    align-items: center;
  }

  .diceImage p{
    font-weight: 500;
    font-size: 24px;
  }
}  
`
