import styled, { css } from "styled-components/native";

type Props = {
  size: number;
};

export const Subtitle = styled.Text<Props>`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  font-size: ${({ size }) => size}px;
  text-align: center;
`;
