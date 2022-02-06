import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  h1 {
    color: var(--med-gray);
    font-size: var(--font-lg);
    margin-top: 20px;
    margin-bottom: 20px;
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`