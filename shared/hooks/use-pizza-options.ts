import {useEffect, useState} from 'react';
import {PizzaSizeType, PizzaType} from '@/shared/constants/pizza';
import {Variant} from '@/shared/components/shared/group-variants';
import {useSet} from 'react-use';
import {getAvailablePizzaSizes} from '@/shared/lib';
import {ProductItem} from '@prisma/client';

type ReturnProps = {
  size: PizzaSizeType;
  type: PizzaType;
  setSize: (size: PizzaSizeType) => void;
  setType: (type: PizzaType) => void;
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
  availablePizzaSizes: Variant[];
};

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSizeType>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, {toggle: addIngredient}] = useSet(
    new Set<number>([])
  );

  const availableSizes = getAvailablePizzaSizes(type, items);

  useEffect(() => {
    //Ищет в списке размеров availableSizes тот, который совпадает с текущим size и при этом не отключён (disabled: false). Если нашёл, в isAvailableSize лежит объект, иначе undefined.
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    //Ищет первый доступный размер, любой. Он нужен как запасной вариант.
    const availableSize = availableSizes?.find((item) => !item.disabled);

    //Условие читается так: «текущий размер недоступен и запасной вариант существует». Тогда размер меняется на запасной. Если текущий размер доступен, эффект ничего не делает.
    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSizeType);
    }
  }, [availableSizes, setSize, size, type]);

  return {
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    addIngredient,
    availablePizzaSizes: availableSizes,
  };
};
