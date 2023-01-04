import { View } from "react-native";
import { Container, ContainerLeft, Hours, MealName, Separator, StatusCircle } from "./styles";

type Props = {
	meal: {
		hours: string,
		name: string,
		goodMeal: boolean
	}

};

export function MealCard({ meal }: Props) {
	return (
		<Container>
			<ContainerLeft>
				<Hours>
					{meal.hours}
				</Hours>
				<Separator />
				<MealName>
					{meal.name}
				</MealName>
			</ContainerLeft>
			<StatusCircle goodMeal={meal.goodMeal} />
		</Container>
	)
}