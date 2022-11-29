import styled from "styled-components";

const estiloCartaFechada = `width: 100%;
height: 35px;
background-color: #FFFFFF;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;

display: flex;
align-items: center;
justify-content: space-between;
`

const estiloCartaAberta = `
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;

& img {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`

export const StyleCardPergunta = styled.div`
  ${props => props.estaAberta ? estiloCartaAberta : estiloCartaFechada}

  & p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}
`