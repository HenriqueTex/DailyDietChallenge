import styled from "styled-components/native";

type Props = {
  type: "success" | "failure";
};

export const Container = styled.SafeAreaView<Props>`
  background-color: ${({ theme, type }) =>
    type === "success" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex: 1;
`;
