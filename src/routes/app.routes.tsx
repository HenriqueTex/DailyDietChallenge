import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateMeal } from '../screens/CreateMeal';
import { Meals } from '../screens/Meals';
import { MealsInfo } from '../screens/MealsInfo';
import { ViewMeal } from '../screens/ViewMeal';
import { EditMeal } from '../screens/EditMeal';

const { Navigator, Screen } = createNativeStackNavigator();
export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }} >
			<Screen
				name="meals"
				component={Meals}
			/>
			<Screen
				name="createMeal"
				component={CreateMeal}
			/>
			<Screen
				name="mealsInfo"
				component={MealsInfo}
			/>
			<Screen
				name="viewMeal"
				component={ViewMeal}
			/>
			<Screen
				name="editMeal"
				component={EditMeal}
			/>
		</Navigator>
	)

}