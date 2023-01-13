import { IconArrowLeft, Title, TitleContainer, TouchableContainer } from "./styles";

type Props = {
	title: string;
	onPress: () => void;
	goodMeal: boolean;
}

export function TitleHeader({ title, onPress, goodMeal }: Props) {

	return (
		<TitleContainer goodMeal={goodMeal}>
			<TouchableContainer onPress={onPress}>
				<IconArrowLeft />
			</TouchableContainer>
			<Title >
				{title}
			</Title>
		</TitleContainer>
	);

}