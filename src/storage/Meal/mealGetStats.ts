import { DietPercent, Meal, MealStats } from "../../@types/type";
import { mealsGetAll } from "./mealGetAll";

export type Section = {
  title: string;
  data: Meal[];
};

export async function mealsGetStats() {
  try {
    const storedMeals = await mealsGetAll();
    let mealStats: MealStats = {
      totalMeals: storedMeals.length,
      goodMeals: 0,
      badMeals: 0,
      bestSequence: 0,
    };

    storedMeals.forEach((meal: Meal) => {
      meal.goodMeal && mealStats.goodMeals++;
      !meal.goodMeal && mealStats.badMeals++;
    });

    return mealStats;
  } catch (error) {
    throw error;
  }
}
