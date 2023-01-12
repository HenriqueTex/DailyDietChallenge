import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  type: "success" | "failure";
};

export const Container = styled.TouchableOpacity<Props>`
  height: 102px;
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 0px 24px;
  margin: 36px 0px;

  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === "success" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const PercentageTitle = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXXL}px;
  `}
`;

export const PercentageSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const IconArrowUpRight = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
}))<Props>`
  ${({ theme, type }) => css`
    color: ${type === "success"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
  position: absolute;
  right: 6px;
  top: 6px;
`;
