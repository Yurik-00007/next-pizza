import * as React from "react";
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/shared/range-slider";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";

type Props = {
  className?: string;
};

const arr = [
  {
    text: "Сырный соус",
    value: "2",
  },
  {
    text: "Моццарелла",
    value: "3",
  },
  {
    text: "Чеснок",
    value: "3",
  },
  {
    text: "Солёные огурчики",
    value: "4",
  },
  {
    text: "Красный лук",
    value: "5",
  },
  {
    text: "Томаты",
    value: "6",
  },
  {text: "Острый перец халапеньо", value: "7"},
  {text: "Цыпленок", value: "8"},
];

export const Filters = ({className}: Props) => {
  return (
    <div className={className}>
      <Title
        text={"Фильтрация"}
        size={"sm"}
        className={"mb-5 font-bold"}
      />
      {/*Верхние чекбоксы*/}
      <div className={"flex flex-col gap-4"}>
        <FilterCheckbox
          text={"Можно собирать"}
          value="1"
        />
        <FilterCheckbox
          text={"Новинки"}
          value="2"
        />
      </div>

      <div className={"my-5 border-t border-neutral-100 py-6 pb-7"}>
        {/*Фильтр центр*/}
        <p className={"mb-3 font-bold"}>Цена от и до:</p>
        <div className={"mb-5 flex gap-4"}>
          <Input
            type={"number"}
            placeholder={"0"}
            min={0}
            max={10000}
            defaultValue={0}
          />
          <Input
            type={"number"}
            placeholder={"10000"}
            min={100}
            max={10000}
            defaultValue={0}
          />
        </div>
        <RangeSlider
          min={0}
          max={10000}
          step={10}
          value={[0, 10000]}
        />
      </div>
      <CheckboxFiltersGroup
        title={"Ингридиенты"}
        className={"mt-5"}
        limit={6}
        defaultItems={arr}
        items={arr}
      />
    </div>
  );
};
