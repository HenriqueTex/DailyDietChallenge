import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../../@types/type";
import { MEAL_COLLECTION } from "../storageConfig";
import { mealsGetAll } from "./mealGetAll";

export async function mealRemove(mealId: string | number[]) {
  try {
    const storedMeals = await mealsGetAll();

    const filteredMeals = storedMeals.filter(
      (meal: Meal) => meal.id !== mealId
    );

    const meals = JSON.stringify(filteredMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, meals);
  } catch (error) {
    throw error;
  }
}
