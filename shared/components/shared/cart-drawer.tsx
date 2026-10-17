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
