import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type TypeStyleProps = "success" | "danger" | "primary";

enum ContainerType {
  success = "GREEN_LIGHT",
  danger = "RED_LIGHT",
  primary = "GRAY_6",
}

type Props = {
  type: TypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 102px;

  justify-content: center;
  align-items: center;

  padding: 0px 24px;
  margin: 6px 0px;

  border-radius: 8px;
  background-color: ${({ theme, type }) => theme.COLORS[ContainerType[type]]};
`;
