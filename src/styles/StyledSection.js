import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 120px;
  min-height: 100vh;
  @media (max-width: 1024px) {
    max-width: none;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
