import { TextInputProps, View } from "react-native";
import { Container, InputBox, Title } from "./styles";

type Props = TextInputProps & {
	title?: string;

};

export function Input({ title = "test", ...rest }: Props) {

	return (
		<Container>
			<Title>{title}</Title>
			<InputBox  {...rest}></InputBox>
		</Container>
	)
}