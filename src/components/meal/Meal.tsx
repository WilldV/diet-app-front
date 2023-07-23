import { MealOptionModel } from "../../model/meal-option.model";
import options from "../../data/options.json";
import { FC, useState } from "react";
import { ComponentOptionModel } from "../../model/component-option.model";

interface MealProps {
  mealOptions: MealOptionModel[];
  changeComponentOptions: (componentOption: ComponentOptionModel[]) => void;
}

export const Meal: FC<MealProps> = ({
  mealOptions,
  changeComponentOptions,
}) => {
  const [selectedMealOption, setSelectedMealOption] = useState(mealOptions[0]);

  return (
    <div>
      <select
        onChange={(e) =>
          setSelectedMealOption(
            mealOptions.find((item) => item.id === e.target.value) ||
              mealOptions[0]
          )
        }
      >
        {mealOptions.map((item) => (
          <option key={`option-${item.id}`} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <section className="text-left">
        <ol type="1">
          {selectedMealOption.components.map((component, index) => (
            <li key={`li-${index}`} className="flex flex-col border-b-2">
              <p className="flex gap-1">
                {index + 1}. {component.name}
                {component.quantity && ` (${component.quantity})`}
                {component.options && (
                  <button
                    className="bg-gray-300 text-sm px-2 rounded-md"
                    onClick={() => {
                      changeComponentOptions(
                        (options as Record<string, ComponentOptionModel[]>)[
                          component.options as string
                        ]
                      );
                    }}
                  >
                    Ver opciones
                  </button>
                )}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};
