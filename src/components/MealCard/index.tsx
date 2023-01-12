import { TouchableOpacityProps, View } from "react-native";
import { Container, ContainerLeft, Hours, MealName, Separator, StatusCircle } from "./styles";
import { Meal } from "../../@types/type";

type Props = TouchableOpacityProps & {
	meal: Meal

};

export function MealCard({ meal, ...rest }: Props) {
	return (
		<Container  {...rest}>
			<ContainerLeft>
				<Hours>
					{meal.hour}
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