import { TouchableOpacityProps, View } from "react-native";
import { Container, ContainerRow, Label, StatusCircle, Title } from "./styles";


type Props = TouchableOpacityProps & {
	value: boolean
	onChange: (...events: any[]) => void

}

export function Ratio({ value = true, onChange, ...rest }: Props) {

	function handlePress(touchedButton: boolean) {
		onChange(touchedButton)
	}

	return (

		<>
			<Title>Está dentro da dieta?</Title>
			<ContainerRow style={{ flex: 1 }}>
				<Container {...rest} isActive={value === true} color="green" onPress={() => handlePress(true)}>
					<StatusCircle color="green" />
					<View style={{ width: 5 }} />
					<Label>Sim</Label>
				</Container>

				<View style={{ width: 20 }} />

				<Container {...rest} isActive={value === false} color="red" onPress={() => handlePress(false)}>
					<StatusCircle color="red" />
					<View style={{ width: 5 }} />
					<Label>Não</Label>
				</Container>
			</ContainerRow>

		</>

	)

}