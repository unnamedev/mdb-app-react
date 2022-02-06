import styled from "styled-components"
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../config";

export const Wrapper = styled.div`
  background: ${({backdrop}) => backdrop ? `url("${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}")` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateInfo 1s;

  @keyframes animateInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Content = styled.div`
  display: block;
  max-height: none;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media (min-width: 768px) {
    display: flex;
  }

  img {
    @media (min-width: 768px) {
      max-width: 360px;
    }
  }

`

export const Text = styled.div`
  padding: 20px 40px;
  color: #fff;
  overflow: hidden;

  p {
    margin-bottom: 10px;
  }

  .rating-directors {
    display: grid;
    gap: 40px;

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, auto);
      justify-content: flex-start;
    }
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background-color: #fff;
    color: #000;
    font-weight: 600;
    border-radius: 50%;
  }

  .rating-directors__item {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      font-size: var(--font-lg);

      @media (min-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }

`
