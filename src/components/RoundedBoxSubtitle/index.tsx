import { Subtitle } from "./styles";
type Props = {
	title: string;
	size?: number;

}

export function RoundedBoxSubtitle({ title, size = 18 }: Props) {

	return (

		<Subtitle size={size}>{title}</Subtitle>

	)

}