import React from 'react'
import styled from "styled-components";

export default function Score({score}) {
  return (
    <div>
      <ScoreContainer>
        <h1>
          {score}
        </h1>
        <p>Text Score</p>
      </ScoreContainer>
    </div>
  )
}

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;