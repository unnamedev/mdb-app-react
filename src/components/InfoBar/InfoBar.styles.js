import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: var(--dark-grey);
  padding: 20px 0;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;
  max-width: var(--max-width);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .column {
    background-color: var(--med-grey);
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 100%;
  }
`