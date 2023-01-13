import { Container } from "./styles";

type Props = {
	children: React.ReactNode;
	isPrimary?: boolean;
}

export function SafeAreaViewColor({ children, isPrimary = true }: Props) {

	return (
		<Container type={isPrimary ? "success" : "failure"}>
			{children}
		</Container>
	)
}