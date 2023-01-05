import { SafeAreaView, Text, View } from "react-native";
import { ContainerInputColumn, ContainerRow, FormContainer, IconArrowLeft, Title, TitleContainer } from "./styles";
import { useTheme } from "styled-components/native";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Ratio } from "../../components/Ratio";

export function CreateMeal() {
	const { COLORS } = useTheme();
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_5 }} >
			<TitleContainer>
				<IconArrowLeft />
				<Title>
					Nova Refeição
				</Title>
			</TitleContainer>
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