'use client';
import {cn} from 'cn';
import {GroupVariants} from '@/shared/components/shared/group-variants';
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from '@/shared/constants/pizza';
import {PizzaImage} from '@/shared/components/shared/pizza-image';
import {Title} from '@/shared/components/shared/title';
import {Button} from '@/shared/components/ui';
import {useEffect, useState} from 'react';
import {Ingredient, ProductItem} from '@prisma/client';
import {IngredientItem} from '@/shared/components/shared/ingredient-item';
import {useSet} from 'react-use';
import {calcTotalPizzaPrice} from '@/shared/lib';

type Props = {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
};
export const ChoosePizzaForm = ({
  className,
  name,
  onClickAddCart,
  items,
  ingredients,
  imageUrl,
}: Props) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, {toggle: addIngredient}] = useSet(
    new Set<number>([])
  );
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца, ингридиенты: ${selectedIngredients.size}`;

  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  //массив видов пицц -> items
  //[
  // {id: 1, price: 550, size: 20, pizzaType: 1, productId: 39,…},
  // {id: 2, price: 495, size: 30, pizzaType: 2, productId: 39, …},
  // {id: 3, price: 226, size: 40, pizzaType: 2, productId: 39, …}]
  //фильтруем пиццу по типу(pizzaType: 1) и отображаем массив -> filteredPizzasByType
  // [{id: 1, price: 550, size: 20, pizzaType: 1, productId: 39, …}]
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  // console.log(items, filteredPizzasByType);

  //превращаем массив объектов pizzaSizes ([{name: 'Маленькая', value: '20'}{…}{…}]) в availablePizzaSizes ([{name: 'Маленькая', value: '20', disabled:false}{…}{…}])
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
  //Обычно disabled: true означает «выключено», а false — «доступно».

  // console.log('availablePizzaSizes', availablePizzaSizes);

  useEffect(() => {
    //Ищет в списке размеров availablePizzaSizes тот, который совпадает с текущим size и при этом не отключён (disabled: false). Если нашёл, в isAvailableSize лежит объект, иначе undefined.
    const isAvailableSize = availablePizzaSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    //Ищет первый доступный размер, любой. Он нужен как запасной вариант.
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);

    //Условие читается так: «текущий размер недоступен и запасной вариант существует». Тогда размер меняется на запасной. Если текущий размер доступен, эффект ничего не делает.
    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [availablePizzaSizes, size, type]);

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      interface: selectedIngredients,
    });
  };

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage
        imgUrl={imageUrl}
        size={size}
      />
      <div className="w-[490] bg-[#f7f6f5] p-7">
        <Title
          text={name}
          size={'md'}
          className={'mb-1 font-extrabold'}
        />
        <p className={'mb-10 text-gray-400'}>{textDetails}</p>
        <div className="mt-5 flex flex-col gap-3">
          <GroupVariants
            items={availablePizzaSizes}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
            value={String(size)}
          />
          <GroupVariants
            items={pizzaTypes}
            onClick={(value) => setType(Number(value) as PizzaType)}
            value={String(type)}
          />
        </div>

        <div
          className={
            'scrollbar mt-5 h-[420px] overflow-auto rounded-md bg-gray-50 p-5'
          }
        >
          <div className={'grid grid-cols-3 gap-3'}>
            {ingredients.map((ingredient: Ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          className={
            'mt-10 h-[55px] w-full cursor-pointer rounded-[18px] px-10 text-base'
          }
          onClick={handleClickAdd}
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
