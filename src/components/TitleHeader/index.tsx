import { IconArrowLeft, Title, TitleContainer, TouchableContainer } from "./styles";

type Props = {
	title: string;
}

export function TitleHeader({ title }: Props) {

	return (
		<TitleContainer>
			<TouchableContainer>
				<IconArrowLeft />
			</TouchableContainer>
			<Title >
				{title}
			</Title>
		</TitleContainer>
	);

}