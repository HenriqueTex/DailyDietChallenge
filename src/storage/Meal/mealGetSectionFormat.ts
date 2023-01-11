import { Meal } from "../../@types/type";
import { mealsGetAll } from "./mealGetAll";

export type Section = {
  title: string;
  data: Meal[];
};

export async function mealsGetSectionFormat() {
  try {
    const storedMeals = await mealsGetAll();

    const sections: Section[] = [];

    storedMeals.forEach((meal: Meal) => {
      const sectionIndex = sections.findIndex(
        (section) => section.title === meal.date
      );

      if (sectionIndex == -1) {
        return sections.push({ title: meal.date, data: [meal] });
      }

      sections[sectionIndex].data.push(meal);
    });

    return sections;
  } catch (error) {
    throw error;
  }
}
