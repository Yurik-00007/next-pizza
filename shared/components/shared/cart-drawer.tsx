import {ReactNode} from 'react';
import {
  Button,
  Sheet,
  SheetClose,
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

type Props = {
  className?: string;
  children?: ReactNode;
};
export const CartDrawer = ({className, children}: Props) => {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent
          className={'flex flex-col justify-between bg-[#F4F1EE] pb-0'}
        >
          <SheetHeader>
            <SheetTitle>
              В корзине <span className={'font-bold'}>3 товара</span>
            </SheetTitle>
          </SheetHeader>

          {/*  Items*/}
          <div className={'mt-5 flex-1 overflow-auto'}>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
            <div className={'mb-2'}>
              <CartDrawerItem
                id={1}
                imageUrl={'/images/pizzas/1.png'}
                name={'Сырная'}
                price={530}
                details={getCartItemDetails(1, 30, [
                  {name: 'сыр'},
                  {name: 'лук'},
                  {name: 'перец'},
                ])}
                quantity={1}
              />
            </div>
          </div>

          <SheetFooter className={'bg-white p-8'}>
            <div className={'w-full'}>
              <div className={'mb-4 flex'}>
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="relativ -top-1 mx-2 flex-1 justify-end border-b border-dashed border-b-neutral-200" />
                </span>

                <span className="text-lg font-bold">500 ₽</span>
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
