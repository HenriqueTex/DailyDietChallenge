import { TouchableOpacityProps } from "react-native";
import { IconArrowUpRight } from "../../screens/Meals/styles";
import { Container, PercentageSubtitle, PercentageTitle } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
}
export function PercentageBox({ title = "test", ...rest }: Props) {
	return (
		<Container {...rest}>
			<IconArrowUpRight />
			<PercentageTitle>
				{title}
			</PercentageTitle>
			<PercentageSubtitle>
				das refeições dentro da dieta
			</PercentageSubtitle>
		</Container>
	)
}