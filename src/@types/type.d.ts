import { GenerateUUID } from "react-native-uuid";

export type Meal = {
  id: string | number[];
  name: string;
  description: string;
  date: string;
  hour: string;
  goodMeal: boolean;
};

type DietPercent = {
  type: "success" | "failure";
  percent: number;
};

type MealStats = {
  bestSequence: number;
  totalMeals: number;
  goodMeals: number;
  badMeals: number;
};
