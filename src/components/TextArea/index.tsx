import { TextInputProps } from "react-native";
import { Container, Input, Title } from "./styles";

type Props = TextInputProps & {
	title: string;

};

export function TextArea({ title, ...rest }: Props) {

	return (
		<Container>
			<Title>{title}</Title>
			<Input numberOfLines={5}
				multiline  {...rest}></Input>
		</Container>
	)
}