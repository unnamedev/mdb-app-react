import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%,
  rgba(0, 0, 0, 0.65) 100%), url(${({image}) => image}), var(--dark-grey);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHero 1s;

  @keyframes animateHero {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Content = styled.div`
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 20px 40px;
`

export const Text = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: var(--font-lg);

    @media (min-width: 768px) {
      font-size: var(--font-xl);
    }
  }

  p {
    @media (min-width: 768px) {
      font-size: var(--font-md);
    }
  }
`