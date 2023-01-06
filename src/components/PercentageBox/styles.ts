import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 102px;
  width: 100%;

  justify-content: center;
  align-items: center;

  padding: 0px 24px;
  margin: 36px 0px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
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
