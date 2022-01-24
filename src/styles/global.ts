import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    ${({ theme }) => css`
      body,
      html,
      #root {
        @media (max-width: 1080px) {
          font-size: 93.75%
        }
        @media (max-width: 720px) {
          font-size: 87.5%
        }
      }

      #root {
        /* max-width: 76.25rem; */
        margin: 0 auto;
      }

      body {
        font-family: ${theme.font.family};
        color: ${theme.colors.text};
        background: ${theme.colors.background};
      }

      button {
        border: 0;
        outline: none;
        cursor: pointer;
        background-color: transparent;
      }

      ul {
        list-style-type: none;
      }

      a {
        text-decoration: none;
        cursor: pointer;
        outline: none;
      }

      input,
      textarea,
      form, button {
        font-family: ${theme.font.family};
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
      }

      &.react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      &.react-modal-content {
        width: 100%;
        max-width: 576px;
        background: ${theme.colors.background};
        padding: 3rem;
        position: relative;
        border-radius: ${theme.borderRadius.borderRadiusSM};
      }
    `}
  `;

export default GlobalStyles;
