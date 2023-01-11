import { FlatList, SafeAreaView, SectionList, Text } from "react-native";
import { Container, Header, HeaderText, IconArrowUpRight, ListTitle } from "./styles";
import { Button } from "../../components/Button";
import { useEffect, useState, useCallback } from "react";
import { MealCard } from "../../components/MealCard";
import { useNavigation } from "@react-navigation/native";
import { PercentageBox } from "../../components/PercentageBox";
import { mealsGetAll } from "../../storage/Meal/mealGetAll";
import { Section, mealsGetSectionFormat } from "../../storage/Meal/mealGetSectionFormat";
import { Meal } from "../../@types/type";





export function Meals() {

	const DATA = [
		{
			title: "Main dishes",
			data: [{ hours: "16:40", name: "test", goodMeal: true }, { hours: "18:40", name: "comida", goodMeal: false }, { hours: "22:40", name: "batata", goodMeal: true }]
		},
		{
			title: "Sides",
			data: [{ hours: "16:40", name: "test", goodMeal: false }, { hours: "18:40", name: "comida", goodMeal: false }, { hours: "22:40", name: "batata", goodMeal: true }]
		},
		{
			title: "Drinks",
			data: [{ hours: "16:40", name: "test", goodMeal: true }, { hours: "18:40", name: "comida", goodMeal: true }, { hours: "22:40", name: "batata", goodMeal: true }]
		},
		{
			title: "Desserts",
			data: [{ hours: "16:40", name: "test", goodMeal: true }, { hours: "18:40", name: "comida", goodMeal: true }, { hours: "22:40", name: "batata", goodMeal: true }]
		}
	];

	const navigation = useNavigation()

	const [meals, setMeals] = useState<Section[]>([])

	async function fetchMeals() {
		const formattedMeals = await mealsGetSectionFormat();
		setMeals(formattedMeals);


	}

	function handleNewMeal() {
		navigation.navigate('createMeal')
	}

	function handleMealsInfo() {
		navigation.navigate('mealsInfo')
	}

	function handleEditMeal(meal: Meal) {
		console.log(meal)
		// navigation.navigate('editMeal', { meal })
	}

	useEffect(useCallback(() => {
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

				<PercentageBox title="98%" onPress={handleMealsInfo} />

				<ListTitle>
					Refeições
				</ListTitle>
				<Button onPress={handleNewMeal} title="Adicionar Refeição" icon="add" />


				<SectionList

					style={{ marginTop: 16 }}
					sections={meals}
					keyExtractor={(item, index) => item.name + index}
					renderItem={({ item }) =>
						<MealCard onPress={() => handleEditMeal(item)} meal={item} />
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