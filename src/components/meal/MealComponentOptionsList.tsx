import { FC } from "react";
import { ComponentOptionModel } from "../../model/component-option.model";

interface MealComponentOptionsListProps {
  componentOptions: ComponentOptionModel[];
}

export const MealComponentOptionsList: FC<MealComponentOptionsListProps> = ({
  componentOptions,
}) => {
  return (
    <ul>
      {componentOptions.map((componentOption, index) => (
        <li key={`li-${index}`} className="flex flex-col">
          <p className="text-left">
            {index + 1}. {componentOption.name}
            {componentOption.quantity && ` (${componentOption.quantity})`}
          </p>
        </li>
      ))}
    </ul>
  );
};
