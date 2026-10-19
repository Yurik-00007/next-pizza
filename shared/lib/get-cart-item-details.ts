import {mapPizzaType, PizzaSizeType, PizzaType} from '@/shared/constants/pizza';
import {Ingredient} from '@prisma/client';

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSizeType,
  ingredients: Ingredient[]
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
