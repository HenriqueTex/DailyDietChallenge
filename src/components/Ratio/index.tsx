import { Text, TouchableOpacityProps, View } from "react-native";
import { Container, ContainerRow, Label, StatusCircle, Title } from "./styles";
import { useState } from "react";
import { Button } from "../Button";

export function Ratio({ ...rest }: TouchableOpacityProps) {

	const [selected, setSelected] = useState(0)

	return (

		<>
			<Title>Está dentro da dieta?</Title>
			<ContainerRow style={{ flex: 1 }}>
				<Container {...rest} isActive={selected === 0} color="green" onPress={() => setSelected(0)}>
					<StatusCircle color="green" />
					<View style={{ width: 5 }} />
					<Label>Sim</Label>
				</Container>

				<View style={{ width: 20 }} />

				<Container {...rest} isActive={selected === 1} color="red" onPress={() => setSelected(1)}>
					<StatusCircle color="red" />
					<View style={{ width: 5 }} />
					<Label>Não</Label>
				</Container>
			</ContainerRow>

			<Button title={"Cadastrar Refeição"}></Button>
		</>

	)

}