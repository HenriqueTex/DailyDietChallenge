import { SafeAreaView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { ContainerBackground, ContainerInfo, ContainerRow, IconArrowLeft, InfoTitle, PercentageTitle, Subtitle, TouchableContainer } from "./styles";
import { RoundedBox } from "../../components/RoundedBox";
import { useNavigation } from "@react-navigation/native";

export function MealsInfo() {

	const navigation = useNavigation()

	function handleBack() {
		navigation.goBack()
	}


	return (

		<SafeAreaView style={{ flex: 1, backgroundColor: "#E5F0DB" }}>

			<ContainerBackground >

				<TouchableContainer onPress={handleBack}>
					<IconArrowLeft />
				</TouchableContainer>

				<PercentageTitle>
					98,06%
				</PercentageTitle>

				<Subtitle>
					das refeições dentro da dieta
				</Subtitle>

			</ContainerBackground>

			<ContainerInfo >
				<InfoTitle>Estatísticas Gerais</InfoTitle>

				<RoundedBox title={"22"} subtitle={"Melhor sequencia de pratos dentro da dieta"} type="primary"></RoundedBox>
				<RoundedBox title={"109"} subtitle={"Refeições registradas"} type="primary"></RoundedBox>

				<ContainerRow>
					<View style={{ flex: 1 }}>
						<RoundedBox title={"99"} subtitle={"Refeições dentro da dieta"} type="success"></RoundedBox>
					</View>

					<View style={{ width: 10 }} />

					<View style={{ flex: 1 }}>
						<RoundedBox title={"12"} subtitle={"Refeições fora da dieta"} type="danger"></RoundedBox>
					</View>

				</ContainerRow>

			</ContainerInfo >
		</SafeAreaView >
	)

}