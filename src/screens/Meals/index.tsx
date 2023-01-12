import { SafeAreaView, SectionList, Text } from "react-native";
import { Container, Header, HeaderText, ListTitle } from "./styles";
import { Button } from "../../components/Button";
import { useEffect, useState, useCallback } from "react";
import { MealCard } from "../../components/MealCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { PercentageBox } from "../../components/PercentageBox";
import { Section, mealsGetSectionFormat } from "../../storage/Meal/mealGetSectionFormat";
import { DietPercent, Meal } from "../../@types/type";
import { mealsGetInDietPercent } from "../../storage/Meal/mealGetInDietPercent";

export function Meals() {

	const navigation = useNavigation()

	const [meals, setMeals] = useState<Section[]>([])

	const [dietPercent, setDietPercent] = useState<DietPercent>({ percent: 0, type: 'success' })

	async function fetchMeals() {

		const formattedMeals = await mealsGetSectionFormat()
		setMeals(formattedMeals)
		const inDietPercent = await mealsGetInDietPercent()
		setDietPercent(inDietPercent)

	}

	function handleNewMeal() {
		navigation.navigate('createMeal')
	}

	function handleMealsInfo() {
		navigation.navigate('mealsInfo')
	}

	function handleViewMeal(meal: Meal) {
		console.log(meal)
		navigation.navigate('viewMeal', { meal })
	}

	useFocusEffect(useCallback(() => {
		fetchMeals()

	}, []));

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<Container>
				<Header>
					<HeaderText>
						ICONPLACER
					</HeaderText>
					<HeaderText>
						PHOTOPLACER
					</HeaderText>
				</Header>

				<PercentageBox percent={dietPercent?.percent} type={dietPercent.type} onPress={handleMealsInfo} />

				<ListTitle>
					Refeições
				</ListTitle>
				<Button onPress={handleNewMeal} title="Adicionar Refeição" icon="add" />


				<SectionList

					style={{ marginTop: 16 }}
					sections={meals}
					keyExtractor={(item, index) => item.name + index}
					renderItem={({ item }) =>
						<MealCard onPress={() => handleViewMeal(item)} meal={item} />
						// <Text>test</Text>
					}
					renderSectionHeader={({ section: { title } }) => (
						<Text>{title}</Text>
					)}
					stickySectionHeadersEnabled={false}
					showsVerticalScrollIndicator={false}

				/>

			</Container>
		</SafeAreaView>
	);
}