'use client';

import {cn} from 'cn';
import {useRouter} from 'next/navigation';
import {ChooseProductForm} from '@/shared/components/shared';
import {ProductWithRelations} from '@/@types/prisma';
import {ChoosePizzaForm} from '@/shared/components/shared/choose-pizza-form';
import {Dialog} from '@/shared/components/ui';
import {DialogContent} from '@/shared/components/ui/dialog';
import {useCartStore} from '@/shared/store';

type Props = {
  product: ProductWithRelations;
  className?: string;
};
export const ChooseProductModal = ({className, product}: Props) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const addCartItem = useCartStore((state) => state.addCartItem);

  const onAddProduct = () => {
    addCartItem({
      productItemId: firstItem.id,
    });
  };
  const onAddPizza = (productItemId: number, ingredients: number[]) => {
    addCartItem({
      productItemId,
      ingredients,
    });
  };

  return (
    <Dialog
      open={!!product}
      onOpenChange={router.back}
    >
      <DialogContent
        className={cn(
          'min-h-[550px] w-[1060px] max-w-[1060px] overflow-hidden bg-white p-0 sm:max-w-[1060px]',
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onAddPizza}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onAddProduct}
            price={firstItem.price}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
