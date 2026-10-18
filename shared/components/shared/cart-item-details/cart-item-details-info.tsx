import {Ingredient} from '@prisma/client';
import {mapPizzaType, PizzaSizeType, PizzaType} from '@/shared/constants/pizza';

type Props = {
  name: string;
  pizzaSize?: PizzaSizeType;
  type?: PizzaType;
  ingredients?: Ingredient[];
  className?: string;
};
export const CartItemDetailsInfo = ({
  name,
  pizzaSize,
  type,
  ingredients,
  className,
}: Props) => {
  const details = [];

  if (pizzaSize && type) {
    const typeName = mapPizzaType[type];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }
  return (
    <div className={className}>
      <div className={'flex items-center justify-between'}>
        <h2 className={'flex-1 text-lg leading-6 font-bold'}>{name}</h2>
      </div>
      {details.length > 0 && (
        <p className={'text-xs text-gray-400'}>{details.join(', ')}</p>
      )}
    </div>
  );
};
