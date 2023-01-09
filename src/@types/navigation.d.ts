export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      meals: undefined;
      createMeal: undefined;
      mealsInfo: undefined;
      viewMeal: { meal: string };
      editMeal: { meal: { hours: string; name: string; goodMeal: boolean } };
    }
  }
}
