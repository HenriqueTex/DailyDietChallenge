import { IconArrowLeft, Title, TitleContainer, TouchableContainer, TypeStyleProps } from "./styles";

type Props = {
	title: string;
	onPress: () => void;
	type?: TypeStyleProps;
}

export function TitleHeader({ title, onPress, type = 'neutral' }: Props) {

	return (
		<TitleContainer color={type}>
			<TouchableContainer onPress={onPress}>
				<IconArrowLeft />
			</TouchableContainer>
			<Title >
				{title}
			</Title>
		</TitleContainer>
	);

}