import { colors } from "@shared/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .image-container {
    position: relative;
    margin-bottom: 10px;

    img {
      height: 10rem;
      width: 295px;
      background: ${colors.primary};
      border-radius: 8px;
      border: 1px solid ${colors.textSecondary};
    }

    button {
      position: absolute;
      top: 0.9rem;
      right: 0.9rem;
      background: rgba(255, 255, 255, 0.9) !important;
      border-radius: 50%;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 1) !important;
        transform: scale(1.1);
      }
    }
  }

  span {
    display: block;
    word-wrap: break-word;
  }
`;
