import { TextInputProps, View } from "react-native";
import { Container, InputBox, Title } from "./styles";



const hourMask = (text = '') => {
	const cleanText = text.replace(/\D+/g, '');
	let secondDigitHourMask = /\d/;

	if (cleanText.charAt(0) === '0' || cleanText.charAt(0) === '1') {
		secondDigitHourMask = /[0-9]/;
	}

	if (cleanText.charAt(0) === '2') {
		secondDigitHourMask = /[0-3]/;
	}

	return [/[0-9]/, secondDigitHourMask, ':', /[0-5]/, /[0-9]/];

};

type Props = TextInputProps & {
	title?: string;

};

export function HourInput({ title = "test", ...rest }: Props) {

	return (
		<Container>
			<Title>{title}</Title>
			<InputBox mask={hourMask} maxLength={5} keyboardType={"numeric"} {...rest}></InputBox>
		</Container>
	)
}