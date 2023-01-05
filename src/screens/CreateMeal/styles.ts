import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const TitleContainer = styled.View`
  width: 100%;
  padding: 6px 0px 24px 0px
  
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const FormContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 24px 24px 0px 0px;

  padding: 24px;
  margin-bottom: -32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const ContainerInputColumn = styled.View`
  flex: 1;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_1,
}))`
  position: absolute;
  left: 12px;
  top: 6px;
`;
