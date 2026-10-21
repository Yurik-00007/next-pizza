import {mapPizzaType, PizzaSizeType, PizzaType} from '@/shared/constants/pizza';
import {CartStateItem} from '@/shared/lib/get-cart-details';

export const getCartItemDetails = (
  ingredients: CartStateItem['ingredients'],
  pizzaType: PizzaType,
  pizzaSize: PizzaSizeType
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};
