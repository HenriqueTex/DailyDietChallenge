import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  type: "primary" | "secondary";
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  width: 100%;
  min-height: 56px;
  max-height: 56px;

  justify-content: center;
  align-items: center;

  margin: 6px 0px;

  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};

  ${({ theme, type }) =>
    type === "secondary" &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_2};
    `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Box = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 18,
  // color: theme.COLORS.WHITE,
}))<Props>`
  ${({ theme, type }) => css`
    color: ${type === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`;
