import { SafeAreaView, View } from "react-native";
import { TitleHeader } from "../../components/TitleHeader";
import { useTheme } from "styled-components/native";
import { BodyContainer } from "../../components/BodyContainer";
import { CircleStatus, DateDescription, DateTitle, MealDescription, MealTitle, Tag, TagText } from "./styles";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Meal } from "../../@types/type";
import { mealRemove } from "../../storage/Meal/mealRemove";

type RouteParams = {
	meal: Meal
}

export function ViewMeal() {

	const { COLORS } = useTheme()

	const navigation = useNavigation()

	const route = useRoute();

	const { meal } = route.params as RouteParams


	function handleDelete(meal: Meal) {
		mealRemove(meal.id)
		navigation.goBack()
	}


	return (

		<>
			<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_5 }}>
				<TitleHeader onPress={() => navigation.goBack()} title="Refeição" />
				<BodyContainer>
					<View style={{ flex: 1 }}>
						<MealTitle>
							{meal.name}
						</MealTitle>
						<MealDescription>
							{meal.description}
						</MealDescription>
						<DateTitle>
							Data e hora
						</DateTitle>
						<DateDescription>
							{meal.date} às {meal.hour}
						</DateDescription>

						<Tag>
							<CircleStatus />
							<View style={{ width: 10 }} />
							<TagText>
								dentro da dieta
							</TagText>
						</Tag>
					</View>
					<Button icon="edit" onPress={() => navigation.navigate('editMeal', { meal })} title="Editar Refeição" />
					<Button icon="delete" onPress={() => handleDelete(meal)} type={"secondary"} title="Excluir Refeição" />
				</BodyContainer>
			</SafeAreaView>
		</>
	);
}