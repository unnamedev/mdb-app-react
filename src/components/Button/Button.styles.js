import styled from "styled-components"

export const Wrapper = styled.button.attrs({
    type: "button"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-grey);
  min-width: 300px;
  padding: 15px 20px;
  border-radius: 30px;
  color: #fff;
  font-size: var(--font-lg);
  transition: all 0.3s;
  cursor: pointer;
  margin: 10px auto;
  &:hover {
    opacity: 0.8; 
  }
`