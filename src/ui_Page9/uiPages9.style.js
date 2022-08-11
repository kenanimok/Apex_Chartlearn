import styled from 'styled-components'
export const Container = styled.div`
  display: grid;
  gap: ${props => (props.gap ? `${props.gap}` : '20px')};
`

export const TextPickDate = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 0 16px;
  display: flex;
  align-self: center;
  line-height: 27px;
  color: #1d1d42;
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


export const Cardmain = styled.div`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '100%')};
  background: ${props =>
    props.background ? props.background : `var(--white)`};
  box-shadow: ${props => (props.isPdfReport ? '0px' : '0px 1px 16px #eaeaea')};
  border: ${props => (props.isPdfReport ? '1px solid #eaeaea' : '0px')};
  border-radius: 26px;
  color: ${props => (props.color ? props.color : `#1d1d42`)};
  padding: ${props => (props.padding ? props.padding : '20px')};
  
`

export const BoxHead = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);

`


export const Country = styled.div`
display: flex;
justify-content: space-between;


 padding: 10px;



/* p{
  display: flex;
  align-items: center;
} */

:nth-child(even) {
    background-color: #F8F8F8;
    width: 100%;
    height: 48px;
}


:nth-child(odd) {
    background-color: white;
    width: 100%;
    height: 48px;
}
`

export const CountryContent =styled.div`

height: 230px;

overflow: auto;
/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #DDE0DF; 
}


`

export const Era = styled.p`


font-family: 'Prompt';
font-style: normal;
font-weight: 500;
font-size: 18px;

/* :nth-child(even) {
    background-color: #F8F8F8;
    border-top-right-radius:16px;
    border-bottom-right-radius:16px;
    width: 100%;
    height: 48px;
} */



`


export const CountryCtn = styled.p`

/* :nth-child(even) {
    background-color: #F8F8F8;
    border-top-left-radius:16px;
    border-bottom-left-radius:16px;
    width: 100%;
    height: 48px;
} */



`




export const BoxCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:repeat(2,1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;

.chartall{
  grid-column: 2/4;

}
`

export const TitleCard = styled.span`
  font-size: 18px;
  color: #1d1d42;
  line-height: 22px;
  display: flex;
  align-items: center;
`