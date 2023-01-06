import { TouchableOpacityProps } from "react-native";
import { Box, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
	icon?: string | null;
	type?: "primary" | "secondary";
}

export function Button({ title, icon = null, type = "primary", ...rest }: Props) {

	return (

		<Container
			type={type}
			{...rest}
		>
			{icon ?
				(
					<Box>
						<Icon type={type} name={icon} />
						<Title type={type}>{title}</Title>
					</Box>
				) :
				<Title type={type}>{title}</Title>}

		</Container>

	);
}