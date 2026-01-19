import { colors } from "../../shared/colors";
import styled from "styled-components";

export const PrincipalContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;

    .password {
      position: relative;

      a {
        position: absolute;
        top: 5px;
        right: 0px;
        font-size: 12px;
        color: ${colors.primary};
      }
    }

    .actions {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      a {
        color: ${colors.primary};
        text-align: center;
        margin-top: 0.5rem;
        text-decoration: none;
        font-size: 14px;
        display: flex;
        gap: 0.3rem;
        align-items: center;
        text-align: center;
        width: 100%;
        justify-content: center;
      }
    }
  }
`;
