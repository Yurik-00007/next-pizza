'use client';
import {cn} from 'cn';
import {GroupVariants} from '@/shared/components/shared/group-variants';
import {PizzaSize, PizzaType, pizzaTypes} from '@/shared/constants/pizza';
import {PizzaImage} from '@/shared/components/shared/pizza-image';
import {Title} from '@/shared/components/shared/title';
import {Button} from '@/shared/components/ui';
import {Ingredient, ProductItem} from '@prisma/client';
import {IngredientItem} from '@/shared/components/shared/ingredient-item';
import {getPizzaDetails} from '@/shared/lib';
import {usePizzaOptions} from '@/shared/hooks/use-pizza-options';

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
  const {
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    addIngredient,
    availablePizzaSizes,
  } = usePizzaOptions(items);

  const {textDetails, totalPrice} = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

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
