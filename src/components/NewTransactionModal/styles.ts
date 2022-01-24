import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.form``;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    line-height: 36px;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: ${theme.borderRadius.borderRadiusSM};
    color: ${theme.colors.greyDark};
    background: ${theme.colors.grey};
    border: 1px solid ${theme.colors.greyLigth};

    & + input {
      margin-top: 1rem;
    }

    &:focus-within {
      border: 1px solid ${theme.colors.blueLigth};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.green};
    color: ${theme.colors.shap};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
    border-radius: ${theme.borderRadius.borderRadiusSM};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`;

export const ButtonClosed = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Content = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

export const RadioBox = styled.button`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.borderRadiusSM};
    height: 4rem;
    margin-top: 1rem;
    border: 1px solid ${theme.colors.greyLigth};

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;

    transition: border-color 0.2s;

    &.isActiveDeposit {
      background: rgba(18, 164, 84, 0.1);
    }

    &.isActiveDraw {
      background: rgba(230, 46, 77, 0.1);
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
    }

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
  `}
`;
