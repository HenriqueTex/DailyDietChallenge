import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const Header = styled.View`
  height: 50px;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.Image``;

export const HeaderUserBox = styled.View`
  height: 36px;
  width: 36px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_3};
  `}

  border-radius: 100%;
`;

export const ListTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin: 6px 0px;
`;
