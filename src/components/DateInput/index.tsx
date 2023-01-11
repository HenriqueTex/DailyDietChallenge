import { TextInputProps, View } from "react-native";
import { Container, InputBox, Title } from "./styles";
import { Masks } from "react-native-mask-input";

type Props = TextInputProps & {
	title?: string;

};

export function DateInput({ title = "test", ...rest }: Props) {

	return (
		<Container>
			<Title>{title}</Title>
			<InputBox mask={Masks.DATE_DDMMYYYY} keyboardType={"numeric"} {...rest}></InputBox>
		</Container>
	)
}