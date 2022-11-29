import styled from "styled-components";

export const StyleFooter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

  & .icones-container {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`