import styled from "styled-components";

export const Image = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  max-width: 720px;
  transition: all 0.3s;
  cursor: pointer;
  animation: animateThumb 0.5s;
  
  &:hover {
    opacity: 0.8;
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`