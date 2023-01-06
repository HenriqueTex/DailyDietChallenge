import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const TitleContainer = styled.View`
  flex-direction: row;
  padding: 16px 24px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const TouchableContainer = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
}))``;
