import styled from 'styled-components'
export const Container = styled.div`
  display: grid;
  gap: ${props => (props.gap ? `${props.gap}` : '20px')};


 
`

export const Title = styled.h1`
  font-family: Prompt;
  font-weight: 600;
  font-size: 28px;
  color: #1d1d42;
  margin-bottom: 0px;
`

export const TextHeader = styled.div`
  font-weight: 500;
  font-size: ${props => (props.fontSize ? `${props.fontSize}` : '24px')};
  color: #1d1d42;

  p {
    font-weight: 400;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 8px;
  }

  span {
    font-size: 14px;
    color: #b1b1b1;
  }
`

export const TextTitle = styled.span`
  margin-left: 18px;
  font-size: 18px;
  color: white;
  display: block;
  line-height: 22px;
`


export const PopulationTotal = styled.span`
  font-weight: 500;
  font-size: 40px;
  color: white;
  display: flex;
  justify-content: end;
`


export const BoxCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4,1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;



  .chartcol{
    grid-column: 2 / 4; 
}
.chartmap{
  grid-row: 3/5;
}

.chartall{
  grid-row: 3/5;
  grid-column: 2/4;

}



`