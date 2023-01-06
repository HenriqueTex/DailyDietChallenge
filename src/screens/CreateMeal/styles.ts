import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const FormContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 24px 24px 0px 0px;

  padding: 24px;
  margin-bottom: -32px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const ContainerInputColumn = styled.View`
  flex: 1;
`;
