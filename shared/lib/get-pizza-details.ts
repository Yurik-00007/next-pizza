import {calcTotalPizzaPrice} from '@/shared/lib/calc-total-pizza-price';
import {mapPizzaType, PizzaSizeType, PizzaType} from '@/shared/constants/pizza';
import {Ingredient, ProductItem} from '@prisma/client';

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSizeType,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца, ингридиенты: ${selectedIngredients.size}`;

  return {totalPrice, textDetails};
};
