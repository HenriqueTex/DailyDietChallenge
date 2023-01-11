import { TextInput } from "react-native";
import MaskInput from "react-native-mask-input";
import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const InputBox = styled(MaskInput)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY_1};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};

  padding: 16px;

  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
