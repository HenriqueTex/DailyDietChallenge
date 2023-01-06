import styled, { css } from "styled-components/native";

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}

  margin: 24px 0 6px 0;
`;

export const MealDescription = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  margin: 24px 0 6px 0;
`;
export const DateDescription = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const Tag = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};

  width: 50%;
  padding: 12px;

  border-radius: 100px;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin: 24px 0px;
`;

export const CircleStatus = styled.View`
  background: ${({ theme }) => theme.COLORS.GREEN_DARK};
  width: 8px;
  height: 8px;

  border-radius: 50px;
`;

export const TagText = styled.Text`
  ${({ theme }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
