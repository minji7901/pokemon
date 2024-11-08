import styled from "styled-components";

export const StyledButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 20px;
  width: calc(100% - 40px);
  padding: 8px 17px;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.875rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  transform: translateX(-50%);
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
