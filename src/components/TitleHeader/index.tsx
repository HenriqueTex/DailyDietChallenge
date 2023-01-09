import { IconArrowLeft, Title, TitleContainer, TouchableContainer } from "./styles";

type Props = {
	title: string;
	onPress: () => void;
}

export function TitleHeader({ title, onPress }: Props) {

	return (
		<TitleContainer>
			<TouchableContainer onPress={onPress}>
				<IconArrowLeft />
			</TouchableContainer>
			<Title >
				{title}
			</Title>
		</TitleContainer>
	);

}