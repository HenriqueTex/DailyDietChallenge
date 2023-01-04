import styled, { css } from "styled-components/native";

type Props = {
  goodMeal: boolean;
};

export const Container = styled.View`
  width: 100%;

  padding: 16px 12px;
  margin: 6px 0px 6px 0px;

  border-color: ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  border-width: 1px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Hours = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Separator = styled.View`
  height: 12px;
  width: 1px;
  margin: 0px 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const StatusCircle = styled.View<Props>`
  padding: 8px;

  border-radius: 50px;
  background-color: ${({ theme, goodMeal }) =>
    goodMeal === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
