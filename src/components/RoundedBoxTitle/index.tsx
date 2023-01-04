import { Title } from "./styles";

type Props = {
	title: string;
	size?: number;
}

export function RoundedBoxTitle({ title, size = 18 }: Props) {

	return (
		<Title size={size}>{title}</Title>

	)

}