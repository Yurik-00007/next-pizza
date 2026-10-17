'use client';

import {cn} from 'cn';
import {useRouter} from 'next/navigation';
import {ChooseProductForm} from '@/shared/components/shared';
import {ProductWithRelations} from '@/@types/prisma';
import {ChoosePizzaForm} from '@/shared/components/shared/choose-pizza-form';
import {Dialog} from '@/shared/components/ui';
import {DialogContent} from '@/shared/components/ui/dialog';

type Props = {
  product: ProductWithRelations;
  className?: string;
};
export const ChooseProductModal = ({className, product}: Props) => {
  const router = useRouter();

  const isPizzaForm = Boolean(product.items[0].pizzaType);
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
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
