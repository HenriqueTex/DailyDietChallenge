import { SafeAreaView } from "react-native-safe-area-context";
import { TitleHeader } from "../../components/TitleHeader";
import { FormContainer } from "../CreateMeal/styles";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { ContainerInputColumn, ContainerRow } from "./styles";
import { View } from "react-native";
import { Ratio } from "../../components/Ratio";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { useState } from "react";


type RouteParams = {
	meal: {
		hours: string,
		name: string,
		goodMeal: boolean
	}
}

export function EditMeal() {

	const { COLORS } = useTheme();


	const route = useRoute();

	const { meal } = route.params as RouteParams


	const navigation = useNavigation()


	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_5 }} >
			<TitleHeader title={"Nova Refeição"} onPress={() => navigation.goBack()} />
			<FormContainer>

				<Input value={meal.name} style={{ marginBottom: 12 }} title="Nome"></Input>

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