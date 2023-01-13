import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "../../@types/type";
import { MEAL_COLLECTION } from "../storageConfig";
import { mealsGetAll } from "./mealGetAll";

export async function mealEdit(newMeal: Meal) {
  try {
    const storedMeals = await mealsGetAll();

    const filteredMeals = storedMeals.filter(
      (meal: Meal) => meal.id !== newMeal.id
    );

    const updatedMeals = JSON.stringify([...filteredMeals, newMeal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, updatedMeals);
  } catch (error) {
    throw error;
  }
}
