import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "../storageConfig";
import { Meal } from "../../@types/type";

export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealsGetAll();

    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
