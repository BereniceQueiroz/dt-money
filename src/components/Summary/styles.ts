import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.shap};
    padding: 1.5rem 2rem;
    border-radius: ${theme.borderRadius.borderRadiusSM};
    color: ${theme.colors.title};

    &.highligth-bg {
      background-color: ${theme.colors.green};
      color: ${theme.colors.shap};
    }
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
`;

export const Title = styled.p`
  line-height: 24px;
`;
