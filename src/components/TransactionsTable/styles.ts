import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 4rem;
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: ${theme.colors.text};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody {
      tr {
        border-radius: ${theme.borderRadius.borderRadiusSM};
        background: ${theme.colors.shap};
        td {
          padding: 1rem 2rem;
          border: 0;
          color: ${theme.colors.title};

          &.deposit {
            color: ${theme.colors.green};
          }
          &.withdraw {
            color: ${theme.colors.red};
          }
        }
      }
    }
  `}
`;
