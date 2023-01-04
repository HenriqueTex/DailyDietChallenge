import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  flex: 1;

  width: 100%;
  min-height: 56px;
  max-height: 56px;

  justify-content: center;
  align-items: center;

  margin: 6px 0px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.WHITE};
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
  color: theme.COLORS.WHITE,
}))``;
