import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 24px 24px 0px 0px;

  padding: 24px;
  margin-bottom: -32px;
`;
