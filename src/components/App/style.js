import styled from "styled-components";

export const StyleApp = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: ${props => props.status ? '50px' : '0'}
`