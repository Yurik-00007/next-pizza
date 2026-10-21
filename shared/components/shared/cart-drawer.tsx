'use client';
import {ReactNode, useEffect} from 'react';
import {
  Button,
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {CartDrawerItem} from '@/shared/components/shared/cart-drawer-item';
import {getCartItemDetails} from '@/shared/lib';
import {useCartStore} from '@/shared/store';
import {PizzaSizeType, PizzaType} from '@/shared/constants/pizza';

type Props = {
  className?: string;
  children?: ReactNode;
};
export const CartDrawer = ({className, children}: Props) => {
  console.log(useCartStore.getState());

  const totalAmount = useCartStore((state) => state.totalAmount);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent
          className={'flex flex-col justify-between bg-[#F4F1EE] pb-0'}
        >
          <SheetHeader>
            <SheetTitle>
              В корзине{' '}
              <span className={'font-bold'}>`${items.length} товара`</span>
            </SheetTitle>
          </SheetHeader>

          {/*  Items*/}
          <div className={'mt-5 flex-1 overflow-auto'}>
            {items.map((item) => (
              <div
                className={'mb-2'}
                key={item.id}
              >
                <CartDrawerItem
                  id={item.id}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  details={
                    item.pizzaSize && item.pizzaType
                      ? getCartItemDetails(
                          item.ingredients,
                          item.pizzaType as PizzaType,
                          item.pizzaSize as PizzaSizeType
                        )
                      : ''
                  }
                  quantity={item.quantity}
                />
              </div>
            ))}
          </div>

          <SheetFooter className={'bg-white p-8'}>
            <div className={'w-full'}>
              <div className={'mb-4 flex'}>
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="relativ -top-1 mx-2 flex-1 justify-end border-b border-dashed border-b-neutral-200" />
                </span>

                <span className="text-lg font-bold">{totalAmount} ₽</span>
              </div>
              <Link href={'/'}>
                <Button
                  type={'submit'}
                  className={'h-12 w-full text-base'}
                >
                  <ArrowRight
                    size={20}
                    className={'ml-2'}
                  />
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
