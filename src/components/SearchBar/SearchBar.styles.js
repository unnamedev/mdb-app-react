import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: var(--dark-grey);
  display: flex;
  align-items: center;
  min-height: 100px;
  max-height: 100px;
  padding: 0 20px;
`

export const Content = styled.div`
  position: relative;
  max-width: var(--max-width);
  width: 100%;
  min-height: 55px;
  max-height: 55px;
  background-color: var(--med-grey);
  margin-left: auto;
  margin-right: auto;
  border-radius: 40px;
  color: #fff;

  svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    display: block;
    width: 100%;
    min-height: inherit;
    padding: 10px 10px 10px 60px;
    font-size: var(--font-md);
  }
`