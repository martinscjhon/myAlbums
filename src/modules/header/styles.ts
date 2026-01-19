import { colors } from "@shared/colors";
import styled from "styled-components";

export const PrincipalContainer = styled.header`
  width: 100%;
  height: 3.5rem;

  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  box-shadow:
    rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(0, 0, 0, 0.23) 0px 6px 6px;

  padding: 0rem 2rem;

  background-color: ${colors.textBlack};

  button {
    background: transparent;
    color: ${colors.textWhite};
    text-decoration: underline;
    font-size: 14px;
  }
`;
