import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  color: TypeStyleProps;
};

export type TypeStyleProps = "success" | "failure" | "neutral";

enum ContainerType {
  success = "GREEN_LIGHT",
  failure = "RED_LIGHT",
  neutral = "GRAY_5",
}

export const TitleContainer = styled.View<Props>`
  flex-direction: row;
  padding: 16px 24px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }) => theme.COLORS[ContainerType[color]]};
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
