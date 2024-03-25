import styled from 'styled-components'

export default function NumberSelector({setSelectedNum,selectedNum,error, setError}) {
  const arrNumber = [1,2,3,4,5,6];

  const handleSelectNumber = (val) =>{
    setSelectedNum(val)
    setError("")
  }
  return (
    <NumberSeries>
      <p className='errorMSG'>{error}</p>
      <div className='flex'>
        {arrNumber.map((val, i) => (
          <BoxContainer isSelected={val == selectedNum} key={i} onClick={() => handleSelectNumber(val)}>
          {val}
          </BoxContainer>
        ))}
      </div>
      <p className='selectNum'>Select Number</p>
    </NumberSeries>
  )
}

const NumberSeries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex{
    display: flex;
    gap: 24px;
    font-weight: 700;
    font-size: 24px;
  }
  .selectNum{
    font-weight: 700;
    font-size: 24px;
  }
  .errorMSG{
    font-weight: 400;
    font-size: 24px;
    color: #FF0C0C;
  }
`
const BoxContainer = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  background-color:  ${ ({isSelected}) => isSelected ? "black" : "white"};
  color:  ${ ({isSelected}) => isSelected ? "white" : "black"};
`