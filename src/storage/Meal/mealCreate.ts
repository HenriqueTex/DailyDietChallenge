import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealGetAll";
import { MEAL_COLLECTION } from "../storageConfig";

type Meal = {
  name: string;
  description: string;
  date: string;
  hour: string;
  goodMeal: boolean;
};

export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealsGetAll();

    const storage = JSON.stringify([...storedMeals, newMeal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    console.log(await mealsGetAll());
  } catch (error) {
    throw error;
  }
}
