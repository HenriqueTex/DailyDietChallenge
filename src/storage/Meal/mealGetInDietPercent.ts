import { DietPercent, Meal } from "../../@types/type";
import { mealsGetAll } from "./mealGetAll";

export type Section = {
  title: string;
  data: Meal[];
};

export async function mealsGetInDietPercent() {
  try {
    const storedMeals = await mealsGetAll();
    let dietPercent: DietPercent = { type: "success", percent: 0 };

    storedMeals.forEach((meal: Meal) => {
      meal.goodMeal && dietPercent.percent++;
    });

    dietPercent.percent = (dietPercent.percent / storedMeals.length) * 100;
    dietPercent.type = dietPercent.percent >= 50 ? "success" : "failure";

    return dietPercent;
  } catch (error) {
    throw error;
  }
}
