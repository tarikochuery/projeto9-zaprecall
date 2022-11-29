import styled from "styled-components";

export const StyleBoasVindas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & .logo-container{
    width: 100%;
    max-width: 136px;
  }

  & .logo-container img {
    width: 100%;
  }

  & h1 {
    font-size: 36px;
    font-family: 'Righteous';
    color: #fff;
  }

  & button {
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #D70900;
    font-family: 'Recursive';
    font-size: 18px;
    width: 246px;
    height: 54px;
  }
`