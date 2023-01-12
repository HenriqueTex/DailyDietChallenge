import { SafeAreaView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { ContainerBackground, ContainerInfo, ContainerRow, IconArrowLeft, InfoTitle, PercentageTitle, Subtitle, TouchableContainer } from "./styles";
import { RoundedBox } from "../../components/RoundedBox";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { mealsGetInDietPercent } from "../../storage/Meal/mealGetInDietPercent";
import { DietPercent, MealStats } from "../../@types/type";
import { mealsGetStats } from "../../storage/Meal/mealGetStats";

export function MealsInfo() {

	const navigation = useNavigation()

	const [dietPercent, setDietPercent] = useState<DietPercent>({ percent: 0, type: 'success' })

	const [mealsStats, setMealsStats] = useState<MealStats>({ totalMeals: 0, bestSequence: 0, goodMeals: 0, badMeals: 0 })

	function handleBack() {
		navigation.goBack()
	}

	async function fetchMealsInfo() {
		setDietPercent(await mealsGetInDietPercent())
		setMealsStats(await mealsGetStats())
	}

	useFocusEffect(useCallback(() => {
		fetchMealsInfo()

	}, []));


	return (

		<SafeAreaView style={{
			flex: 1, backgroundColor: dietPercent.type == "success" ? "#E5F0DB" : "#F4E6E7"
		}}>

			<ContainerBackground type={dietPercent.type} >

				<TouchableContainer onPress={handleBack}>
					<IconArrowLeft />
				</TouchableContainer>

				<PercentageTitle>
					{(dietPercent.percent).toFixed(2)}%
				</PercentageTitle>

				<Subtitle>
					das refeições dentro da dieta
				</Subtitle>

			</ContainerBackground>

			<ContainerInfo >
				<InfoTitle>Estatísticas Gerais</InfoTitle>

				<RoundedBox title={22} subtitle={"Melhor sequencia de pratos dentro da dieta"} type="primary"></RoundedBox>
				<RoundedBox title={mealsStats.totalMeals} subtitle={"Refeições registradas"} type="primary"></RoundedBox>

				<ContainerRow>
					<View style={{ flex: 1 }}>
						<RoundedBox title={mealsStats.goodMeals} subtitle={"Refeições dentro da dieta"} type="success"></RoundedBox>
					</View>

					<View style={{ width: 10 }} />

					<View style={{ flex: 1 }}>
						<RoundedBox title={mealsStats.badMeals} subtitle={"Refeições fora da dieta"} type="danger"></RoundedBox>
					</View>

				</ContainerRow>

			</ContainerInfo >
		</SafeAreaView >
	)

}