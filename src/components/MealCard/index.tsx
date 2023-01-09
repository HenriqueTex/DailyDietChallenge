import { TouchableOpacityProps, View } from "react-native";
import { Container, ContainerLeft, Hours, MealName, Separator, StatusCircle } from "./styles";

type Props = TouchableOpacityProps & {
	meal: {
		hours: string,
		name: string,
		goodMeal: boolean

	}

};

export function MealCard({ meal, ...rest }: Props) {
	return (
		<Container  {...rest}>
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