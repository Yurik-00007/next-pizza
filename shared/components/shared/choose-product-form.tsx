import {cn} from 'cn';
import {Title} from '@/shared/components/shared/title';
import {Button} from '@/shared/components/ui';

type Props = {
  imageUrl: string;
  name: string;
  price: number;
  onSubmit?: VoidFunction;
  className?: string;
};

/**
 *
 * Форма выбора продукта
 */
export const ChooseProductForm = ({
  className,
  name,
  onSubmit,
  price,
  imageUrl,
}: Props) => {
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

        <Button
          className={
            'mt-10 h-[55px] w-full cursor-pointer rounded-[18px] px-10 text-base'
          }
          onClick={onSubmit}
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
