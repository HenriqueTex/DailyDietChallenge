import { Text, TouchableOpacityProps, View } from "react-native";
import { Container, TypeStyleProps } from "./styles";
import { RoundedBoxTitle } from "../RoundedBoxTitle";
import { RoundedBoxSubtitle } from "../RoundedBoxSubtitle";

type Props = TouchableOpacityProps & {
	title: string;
	titleSize?: number;
	type?: TypeStyleProps;
	subtitle: string;
	subtitleSize?: number;
}
export function RoundedBox({ title, titleSize = 24, subtitleSize = 14, subtitle, type = "success", ...rest }: Props) {

	return (
		<Container type={type}>
			<RoundedBoxTitle size={titleSize} title={title} />
			<RoundedBoxSubtitle size={subtitleSize} title={subtitle} />
		</Container>

	)
}