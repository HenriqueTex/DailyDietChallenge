import { TouchableOpacityProps } from "react-native";
import { Container, IconArrowUpRight, PercentageSubtitle, PercentageTitle } from "./styles";

type Props = TouchableOpacityProps & {
	percent?: number;
	type: 'success' | 'failure'
}
export function PercentageBox({ percent = 0, type, ...rest }: Props) {
	return (
		<Container type={type} {...rest}>
			<IconArrowUpRight type={type} />
			<PercentageTitle>
				{percent.toFixed(2)}%
			</PercentageTitle>
			<PercentageSubtitle>
				das refeições dentro da dieta
			</PercentageSubtitle>
		</Container >
	)
}