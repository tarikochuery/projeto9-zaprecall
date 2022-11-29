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
`;

const estiloCartaAberta = `
width: 100%;
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
align-items: center;

& img {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`;

export const StyleCardPergunta = styled.div`
  ${props => props.estaAberta && !props.estaFinalizada ? estiloCartaAberta : estiloCartaFechada}

  & p {
  text-decoration: ${props => props.estaFinalizada && 'line-through'};
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.statusCor ? props.statusCor : '#333333'};
  }
`;

export const ContainerBotoes = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const StyleButton = styled.button`
  width: 86px;
  border-radius: 5px;
  color: #FFF;
  font-size: 12px;
  font-family: 'Recursive';
  border: none;
  height: 40px;
  background-color: ${props => props.color};
`;