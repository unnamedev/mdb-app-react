import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--dark-grey);
  padding: 0 20px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`

export const LogoImg = styled.img`
  max-width: 150px;

  @media (min-width: 576px) {
    max-width: 200px;
  }
`

export const TMDBLogoImg = styled.img`
  max-width: 80px;

  @media (min-width: 576px) {
    max-width: 100px;
  }
`