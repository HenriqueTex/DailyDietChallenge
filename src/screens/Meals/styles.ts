import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const Header = styled.View`
  height: 50px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GREEN_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const PercentageBox = styled.View`
  height: 102px;
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 0px 24px;
  margin: 36px 0px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const ListTitle = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin: 6px 0px;
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
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  right: 6px;
  top: 6px;
`;
