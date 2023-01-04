import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const ContainerBackground = styled.View`
  width: 100%;
  padding: 36px 0px

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const ContainerInfo = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 24px 24px 0px 0px;

  padding: 24px;
  margin-bottom: -32px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;

  /* align-items: center;
  justify-content: center; */
`;

export const PercentageTitle = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXXL}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  left: 6px;
  top: 6px;
`;
