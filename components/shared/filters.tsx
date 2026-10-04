'use client';
import {Title} from '@/components/shared/title';
import {Input} from '@/components/ui';
import {RangeSlider} from '@/components/shared/range-slider';
import {CheckboxFiltersGroup} from '@/components/shared/checkbox-filters-group';
import {useFilters, useIngredients, useQueryFilters} from '@/hooks';

type Props = {
  className?: string;
};

export const Filters = ({className}: Props) => {
  const {ingredients, loading} = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((el) => ({
    value: String(el.id),
    text: el.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={className}>
      <Title
        text={'Фильтрация'}
        size={'sm'}
        className={'mb-5 font-bold'}
      />
      {/*Верхние чекбоксы*/}
      <CheckboxFiltersGroup
        title={'Тип теста'}
        name={'pizzaTypes'}
        className={'mt-5'}
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          {text: 'Тонкое', value: '1'},
          {text: 'Традиционное', value: '2'},
        ]}
      />

      <CheckboxFiltersGroup
        title={'Размеры'}
        name={'sizes'}
        className={'mt-5'}
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          {text: '20 см', value: '20'},
          {text: '30 см', value: '30'},
          {text: '40 см', value: '40'},
        ]}
      />

      <div className={'my-5 border-t border-neutral-100 py-6 pb-7'}>
        {/*Фильтр центр*/}
        <p className={'mb-3 font-bold'}>Цена от и до:</p>
        <div className={'mb-5 flex gap-4'}>
          <Input
            type={'number'}
            placeholder={'0'}
            min={0}
            max={10000}
            value={String(filters.prices.priceFrom ?? 0)}
            onChange={(e) =>
              filters.setPrices('priceFrom', Number(e.target.value))
            }
          />
          <Input
            type={'number'}
            placeholder={'10000'}
            min={100}
            max={1000}
            value={String(filters.prices.priceTo ?? 1000)}
            onChange={(e) =>
              filters.setPrices('priceTo', Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFiltersGroup
        title={'Ингридиенты'}
        className={'mt-5'}
        limit={6}
        loading={loading}
        defaultItems={items.slice(0, 6)}
        items={items}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
        name={'ingredients'}
      />
    </div>
  );
};
