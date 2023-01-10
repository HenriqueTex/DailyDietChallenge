import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type ColorStyleProps = "red" | "green";

export type StyleProps = {
  isActive?: boolean;
  color: ColorStyleProps;
};

enum ColorType {
  red = "RED_DARK",
  green = "GREEN_DARK",
}

export const Container = styled.TouchableOpacity<StyleProps>`
  ${({ theme, color, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS[ColorType[color]]};
    `}
  background-color: ${({ theme, color }) =>
    color === "green" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  flex: 1;
  border-radius: 6px;

  min-height: 56px;
  max-height: 56px;

  align-items: center;
  justify-content: center;

  flex-direction: row;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const StatusCircle = styled.View<StyleProps>`
  width: 12px;
  height: 12px;

  border-radius: 50px;

  ${({ theme, color }) =>
    css`
      background-color: ${theme.COLORS[ColorType[color]]};
    `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
