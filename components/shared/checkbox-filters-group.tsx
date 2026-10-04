'use client';
import * as React from 'react';
import {ChangeEvent, useState} from 'react';
import {
  FilterChecboxProps,
  FilterCheckbox,
} from '@/components/shared/filter-checkbox';
import {Input, Skeleton} from '@/components/ui';

type Item = FilterChecboxProps;

type Props = {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  className?: string;
  selected?: Set<string>;
  name?: string;
};
export const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск ...',
  className,
  loading = false,
  onClickCheckbox,
  selected,
  name,
  defaultValue,
}: Props) => {
  const [showAll, setShowAll] = useState(false);

  const [searchValue, setSearchValue] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const list = showAll
    ? items.filter((el) =>
        el.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  if (loading) {
    return (
      <div className={className}>
        <p className={'mb-3 font-bold'}>{title}</p>
        {Array(limit)
          .fill(null)
          .map((_, i) => (
            <Skeleton
              key={i}
              className={'mb-4 h-6 rounded-[8px]'}
            />
          ))}
        <Skeleton className={'mb-4 h-6 w-28 rounded-[8px]'} />
      </div>
    );
  }
  return (
    <div className={className}>
      <p className={'mb-3 font-bold'}>{title}</p>
      {showAll && (
        <div className={'mb-5'}>
          <Input
            placeholder={searchInputPlaceholder}
            className={'border-none bg-gray-50'}
            onChange={onChangeInput}
            value={searchValue}
          />
        </div>
      )}
      <div
        className={'scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-3'}
      >
        {list.map((item: Item) => (
          <FilterCheckbox
            key={String(item.value)}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'mt-4 border-t border-neutral-100' : ''}>
          <button
            className={'text-primary mt-3'}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
