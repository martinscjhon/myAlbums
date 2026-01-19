import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  gap: 1rem;

  .header_modal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    button {
      box-shadow: none !important;
      width: 3rem !important;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
