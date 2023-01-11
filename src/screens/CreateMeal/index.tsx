import { Keyboard, SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import { ContainerInputColumn, ContainerRow, FormContainer } from "./styles";
import { useTheme } from "styled-components/native";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Ratio } from "../../components/Ratio";
import { TitleHeader } from "../../components/TitleHeader";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { mealCreate } from "../../storage/Meal/mealCreate";
import { mealsGetAll } from "../../storage/Meal/mealGetAll";
import MaskInput, { Masks } from "react-native-mask-input";
import { DateInput } from "../../components/DateInput";
import { HourInput } from "../../components/HourInput";
import { Meal } from "../../@types/type";



export function CreateMeal() {
	const { COLORS } = useTheme();

	const navigation = useNavigation()

	const { control, handleSubmit } = useForm<Meal>();

	function handleBack() {
		navigation.goBack()
	}

	function onSubmit(data: Meal) {
		mealCreate(data)
		navigation.navigate('meals')
	}


	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>

			<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_5 }} >
				<TitleHeader title={"Nova Refeição"} onPress={handleBack} />
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
							<TextArea style={{ marginBottom: 12 }} value={value} onChange={onChange} title="Descrição"></TextArea>
						)}
					/>


					<ContainerRow>
						<ContainerInputColumn style={{ marginBottom: 12 }}>
							<Controller
								name='date'
								control={control}
								render={({ field: { onChange, value } }) => (

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
						render={({ field: { onChange, value = true } }) => (
							<Ratio value={value} onChange={onChange} />

						)}
					/>


					<Button title={"Cadastrar Refeição"} onPress={handleSubmit(onSubmit)} ></Button>

				</FormContainer>
			</ SafeAreaView>
		</TouchableWithoutFeedback>
	)


}