import { FlatList, SafeAreaView, SectionList, Text } from "react-native";
import { Container, Header, HeaderText, IconArrowUpRight, ListTitle, PercentageBox, PercentageSubtitle, PercentageTitle } from "./styles";
import { Button } from "../../components/Button";
import { useState } from "react";
import { MealCard } from "../../components/MealCard";

export function Meals() {
	const [players, setPlayers] = useState(['jo', 'maria'])

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

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Container>
				<Header>
					<HeaderText>
						ICONPLACER
					</HeaderText>
					<HeaderText>
						PHOTOPLACER
					</HeaderText>
				</Header>


				<PercentageBox>
					<IconArrowUpRight />
					<PercentageTitle>
						98%
					</PercentageTitle>
					<PercentageSubtitle>
						das refeições dentro da dieta
					</PercentageSubtitle>
				</PercentageBox>

				<ListTitle>
					Refeições
				</ListTitle>
				<Button title="Adicionar Refeição" icon="add" />


				<SectionList

					style={{ marginTop: 16 }}
					sections={DATA}
					keyExtractor={(item, index) => item.name + index}
					renderItem={({ item }) => <MealCard meal={item} />}
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