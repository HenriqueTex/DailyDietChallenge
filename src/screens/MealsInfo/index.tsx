import { SafeAreaView, Text, View } from "react-native";
import { ContainerBackground, ContainerInfo, ContainerRow, IconArrowLeft, InfoTitle, PercentageTitle, Subtitle } from "./styles";
import { RoundedBox } from "../../components/RoundedBox";

export function MealsInfo() {
	return (

		<SafeAreaView style={{ flex: 1, backgroundColor: "#E5F0DB" }}>

			<ContainerBackground >

				<IconArrowLeft />

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