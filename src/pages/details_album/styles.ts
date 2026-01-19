import { colors } from "@shared/colors";
import styled from "styled-components";

export const PrincipalContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .list_albums {
    display: flex;
    gap: 2rem;
  }

  a {
    color: ${colors.primary};
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    gap: 0.3rem;
    align-items: center;
    text-align: center;
    width: 100%;
    justify-content: center;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;

  > span {
    font-weight: 600;
  }
`;
