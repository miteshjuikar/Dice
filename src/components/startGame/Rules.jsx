import React from 'react'
import styled from 'styled-components'
export default function Rules() {
  return (
    <RulesDes>
    <div className='rulesFlex'>
        <h1>How to play dice game</h1>
        <p>Select any number <br/>
        Click on dice image <br/>
        after click on  dice  if selected number is equal to dice number you will get same point as dice<br/> 
        if you get wrong guess then  2 point will be dedcuted </p>
    </div>
    </RulesDes>
  )
}

const RulesDes = styled.div`
    margin: 0 auto;
    width: 754px;
    height: 230px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: #a6a0a0;
    margin: 50px 23%;
    border-radius: 5px;

.rulesFlex{
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 10px;
    padding: 10px;
}
.rulesFlex h1{
    font-weight: 800;
    font-size: 24px;
}

.rulesFlex p{
    font-weight: 400;
    font-size: 16px;
}
`
