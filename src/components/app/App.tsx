import { useState } from "react";
import breakfastOptions from "../../data/breakfast.json";
import midmorningOptions from "../../data/midmorning.json";
import lunchOptions from "../../data/lunch.json";
import dinnerOptions from "../../data/dinner.json";

import { Modal } from "../modal/Modal";
import { ComponentOptionModel } from "../../model/component-option.model";
import { Meal } from "../meal/Meal";
import { MealOptionModel } from "../../model/meal-option.model";
import { Collapse } from "../collapse/Collapse";
import { MealComponentOptionsList } from "../meal/MealComponentOptionsList";

function App() {
  const [selectedComponentOptionModel, setComponentOptionModel] = useState<
    ComponentOptionModel[]
  >([]);

  return (
    <div className="flex flex-col text-left">
      <h1 className="text-xl font-bold">Plan 1</h1>
      <div className="flex flex-col mt-2 gap-2">
        <Collapse title="Desayuno">
          <Meal
            changeComponentOptions={setComponentOptionModel}
            mealOptions={breakfastOptions as MealOptionModel[]}
          />
        </Collapse>
        <Collapse title="Media mañana">
          <Meal
            changeComponentOptions={setComponentOptionModel}
            mealOptions={midmorningOptions as MealOptionModel[]}
          />
        </Collapse>
        <Collapse title="Almuerzo">
          <Meal
            changeComponentOptions={setComponentOptionModel}
            mealOptions={lunchOptions as MealOptionModel[]}
          />
        </Collapse>
        <Collapse title="Cena">
          <Meal
            changeComponentOptions={setComponentOptionModel}
            mealOptions={dinnerOptions as MealOptionModel[]}
          />
        </Collapse>
      </div>
      <Modal
        open={selectedComponentOptionModel.length > 0}
        handleClose={() => setComponentOptionModel([])}
      >
        <MealComponentOptionsList
          componentOptions={selectedComponentOptionModel}
        />
      </Modal>
    </div>
  );
}

export default App;
