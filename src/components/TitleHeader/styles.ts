import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  goodMeal: boolean;
};

export const TitleContainer = styled.View<Props>`
  flex-direction: row;
  padding: 16px 24px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, goodMeal }) =>
    goodMeal === true ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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
  padding: 12px;
  left: 12px;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
}))``;
