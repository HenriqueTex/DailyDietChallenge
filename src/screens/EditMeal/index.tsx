import { SafeAreaView } from "react-native-safe-area-context";
import { TitleHeader } from "../../components/TitleHeader";
import { FormContainer } from "../CreateMeal/styles";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { ContainerInputColumn, ContainerRow } from "./styles";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { Ratio } from "../../components/Ratio";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Meal } from "../../@types/type";
import { DateInput } from "../../components/DateInput";
import { HourInput } from "../../components/HourInput";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { SafeAreaViewColor } from "../../components/SafeAreaViewColor";
import { useEffect, useState } from "react";
import { mealEdit } from "../../storage/Meal/mealEdit";


type RouteParams = {
	meal: Meal
}

export function EditMeal() {


	const route = useRoute();

	const { meal } = route.params as RouteParams


	const { control, handleSubmit } = useForm<Meal>({
		defaultValues: {

			name: meal.name,
			description: meal.description,
			date: meal.date,
			hour: meal.hour,
			goodMeal: meal.goodMeal

		}

	});


	console.log(meal)

	const navigation = useNavigation()

	function handleBack() {
		navigation.goBack()
	}

	function onSubmit(data: Meal) {
		data.id = meal.id;
		mealEdit(data)

		navigation.goBack()
	}


	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>

			<SafeAreaViewColor isPrimary={meal.goodMeal}>
				<TitleHeader goodMeal={meal.goodMeal} title={"Editar Refeição"} onPress={handleBack} />
				<FormContainer>

					<Controller
						name="name"
						control={control}
						render={({ field: { onChange, value } }) => (

							<Input style={{ marginBottom: 12 }} title="Nome" value={value} onChangeText={onChange}></Input>
						)}
					/>
					<Controller
						name="description"
						control={control}
						render={({ field: { onChange, value } }) => (
							<TextArea style={{ marginBottom: 12 }} value={value} onChangeText={onChange} title="Descrição"></TextArea>
						)}
					/>


					<ContainerRow>
						<ContainerInputColumn style={{ marginBottom: 12 }}>
							<Controller
								name='date'
								control={control}
								render={({ field: { onChange, value
								} }) => (

									<DateInput style={{ marginBottom: 12 }} onChangeText={onChange} value={value} title="Data"></DateInput>
								)}
							/>

						</ContainerInputColumn>

						<View style={{ width: 20 }} />

						<ContainerInputColumn style={{ marginBottom: 12 }}>
							<Controller
								name='hour'
								control={control}
								render={({ field: { onChange, value } }) => (

									<HourInput title="Hora" onChangeText={onChange} value={value} ></HourInput>
								)}
							/>

						</ContainerInputColumn>
					</ContainerRow>

					<Controller
						name='goodMeal'
						control={control}
						render={({ field: { onChange, value } }) => (
							<Ratio value={value} onChange={onChange} />

						)}
					/>


					<Button title={"Editar Refeição"} onPress={(handleSubmit(onSubmit))} ></Button>

				</FormContainer>
			</SafeAreaViewColor>
		</TouchableWithoutFeedback>
	)

}