import { Meal } from "./type";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      meals: undefined;
      createMeal: undefined;
      mealsInfo: undefined;
      viewMeal: { meal: Meal };
      editMeal: { meal: Meal };
    }
  }
}
