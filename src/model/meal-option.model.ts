import { MealOptionComponentModel } from "./meal-option-component.model";

export interface MealOptionModel {
  id: string;
  name: string;
  components: MealOptionComponentModel[];
}
