import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 1rem;
      color: ${theme.colors.shapPrincipal};
      background-color: ${theme.colors.blueLigth};
      border-radius: ${theme.borderRadius.borderRadiusSM};
      padding: 12px 32px;
      border: none;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: 1rem;
    color: ${theme.colors.shapPrincipal};
    background-color: ${theme.colors.blueLigth};
    border-radius: ${theme.borderRadius.borderRadiusSM};
    padding: 12px 32px;
    border: none;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;
