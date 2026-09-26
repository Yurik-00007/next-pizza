"use client";
import * as React from "react";
import {ChangeEvent, useState} from "react";
import {
  FilterChecboxProps,
  FilterCheckbox,
} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui";

type Item = FilterChecboxProps;

type Props = {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (value: string[]) => void;
  defaultValue?: string[];
  className?: string;
};
export const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск ...",
  className,
  onChange,
  defaultValue,
}: Props) => {
  const [showAll, setShowAll] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const list = showAll
    ? items.filter((el) =>
        el.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);
  return (
    <div className={className}>
      <p className={"mb-3 font-bold"}>{title}</p>
      {showAll && (
        <div className={"mb-5"}>
          <Input
            placeholder={searchInputPlaceholder}
            className={"border-none bg-gray-50"}
            onChange={onChangeInput}
            value={searchValue}
          />
        </div>
      )}
      <div
        className={"scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-3"}
      >
        {list.map((item: Item) => (
          <FilterCheckbox
            key={String(item.value)}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "mt-4 border-t border-neutral-100" : ""}>
          <button
            className={"text-primary mt-3"}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
