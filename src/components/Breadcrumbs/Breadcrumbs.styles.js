import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: var(--med-grey);
  color: #fff;
`

export const Content = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  span, a {
    padding-right: 10px;

    @media (min-width: 768px) {
      font-size: var(--font-md);
    }
  }
`