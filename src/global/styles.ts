import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    :root {
        --font-primary: 'Poppins';
        --font-secondary: 'Roboto';
        --font-tertiary: 'Montserrat';
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: var(--font-primary);
    }

    button {
        cursor: pointer;
        border: none;
    }

    input {
        border: none;
        outline: none;
    }

  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        animation: fadeIn 0.3s ease-out;
    }
    
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: white;
        padding: 2rem;
        position: relative;
        border-radius: 0.25rem;
        animation: modalSlideIn 0.4s ease-out;
    }

`;
