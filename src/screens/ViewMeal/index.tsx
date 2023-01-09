import { SafeAreaView, View } from "react-native";
import { TitleHeader } from "../../components/TitleHeader";
import { useTheme } from "styled-components/native";
import { BodyContainer } from "../../components/BodyContainer";
import { CircleStatus, DateDescription, DateTitle, MealDescription, MealTitle, Tag, TagText } from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";


export function ViewMeal() {

	const { COLORS } = useTheme()
	const navigation = useNavigation()


	return (

		<>
			<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_5 }}>
				<TitleHeader onPress={() => navigation.goBack()} title="Refeição" />
				<BodyContainer>
					<View style={{ flex: 1 }}>
						<MealTitle>
							Sanduíche
						</MealTitle>
						<MealDescription>
							Sanduíche de pão integral com atum e salada de alface e tomate
						</MealDescription>
						<DateTitle>
							Data e hora
						</DateTitle>
						<DateDescription>
							12/08/2022 às 12:00
						</DateDescription>

						<Tag>
							<CircleStatus />
							<View style={{ width: 10 }} />
							<TagText>
								dentro da dieta
							</TagText>
						</Tag>
					</View>
					<Button icon="edit" title="Editar Refeição" />
					<Button icon="delete" type={"secondary"} title="Excluir Refeição" />
				</BodyContainer>
			</SafeAreaView>
		</>
	);
}