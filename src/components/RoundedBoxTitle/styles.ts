import styled, { css } from "styled-components/native";

type Props = {
  size: number;
};

export const Title = styled.Text<Props>`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  font-size: ${({ size }) => size}px;
`;
