import { Container } from "./styles";
type Props = {
	children: React.ReactNode;
}

export function BodyContainer({ children }: Props) {
	return (

		<Container>
			{children}
		</Container>
	);
}