import {cn} from 'cn';
import {Title} from '@/shared/components/shared/title';
import {Button} from '@/shared/components/ui';

type Props = {
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
  className?: string;
};
export const ChooseProductForm = ({
  className,
  name,
  onClickAdd,
  imageUrl,
}: Props) => {
  const textDetails = '30 см, традиционное тесто 30, 550 г';
  const totalPrice = 350;
  return (
    <div className={cn('flex flex-1', className)}>
      <div
        className={'relative flex w-full flex-1 items-center justify-center'}
      >
        <img
          src={imageUrl}
          alt={name}
          className={
            'relative top-2 left-2 z-10 h-auto max-h-[350px] w-full max-w-[350px] object-contain transition-all duration-300'
          }
        />
      </div>
      <div className="w-[490] bg-[#f7f6f5] p-7">
        <Title
          text={name}
          size={'md'}
          className={'mb-1 font-extrabold'}
        />

        <p className={'mb-10 text-gray-400'}>{textDetails}</p>
        <Button
          className={
            'h-[55px] w-full cursor-pointer rounded-[18px] px-10 text-base'
          }
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
