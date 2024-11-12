import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNotFoundPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  height: 100vh;
  background: #8bc34a;
  h1 {
    margin-bottom: 20px;
    font-size: 4rem;
  }
  a {
    display: block;
    text-align: center;
    padding: 10px 0;
    font-size: 1.5rem;
    border-radius: 5px;
    background: #f06292;
  }
`;

export default function NotFound() {
  return (
    <StyledNotFoundPage>
      <div>
        <h1>Not Found</h1>
        <Link to="/">go to Home</Link>
      </div>
    </StyledNotFoundPage>
  );
}
