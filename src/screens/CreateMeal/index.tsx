import { SafeAreaView, Text, View } from "react-native";
import { ContainerInputColumn, ContainerRow, FormContainer } from "./styles";
import { useTheme } from "styled-components/native";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Ratio } from "../../components/Ratio";
import { TitleHeader } from "../../components/TitleHeader";
import { useNavigation } from "@react-navigation/native";

export function CreateMeal() {
	const { COLORS } = useTheme();

	const navigation = useNavigation()

	function handleBack() {
		navigation.goBack()
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_5 }} >
			<TitleHeader title={"Nova Refeição"} onPress={handleBack} />
			<FormContainer>

				<Input style={{ marginBottom: 12 }} title="Nome"></Input>

				<TextArea style={{ marginBottom: 12 }} title="Descrição"></TextArea>

				<ContainerRow>
					<ContainerInputColumn style={{ marginBottom: 12 }}>
						<Input style={{ marginBottom: 12 }} title="Data"></Input>
					</ContainerInputColumn>

					<View style={{ width: 20 }} />

					<ContainerInputColumn style={{ marginBottom: 12 }}>
						<Input title="Hora"></Input>
					</ContainerInputColumn>
				</ContainerRow>

				<Ratio />


			</FormContainer>
		</ SafeAreaView>

	)


}