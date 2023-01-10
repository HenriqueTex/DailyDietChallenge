import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";

export async function mealsGetAll() {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);

    return storedMeals ? JSON.parse(storedMeals) : [];
  } catch (error) {
    throw error;
  }
}
