import {Ingredient, ProductItem} from '@prisma/client';
import {PizzaSizeType, PizzaType} from '@/shared/constants/pizza';

/**
 * Функция для подсчета общей стоимости пиццы.
 *
 * @param type - тип теста выбронной пиццы
 * @param size - размер
 * @param items - список вариаций
 * @param ingredients - список ингридиентов
 * @param selectedIngredients - выбранные ингридиенты
 *
 * @return общая стоимость
 * @example
 * const items = [
 *   {id: 1, price: 550, size: 20, pizzaType: 1},
 *   {id: 2, price: 495, size: 30, pizzaType: 2},
 * ];
 * const selectedIngredients = [
 *   {id: 1, name: 'Сыр', price: 50},
 *   {id: 2, name: 'Томаты', price: 30},
 * ];
 *
 * calcTotalPizzaPrice(1, 20, items, ingredients, new Set([1, 2]));
 * // => 630 (550 за пиццу + 50 + 30 за ингредиенты)
 */

export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSizeType,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
