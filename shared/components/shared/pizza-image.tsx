import {cn} from 'cn';

type Props = {
  className?: string;
  imgUrl: string;
  size: 20 | 30 | 40;
};
export const PizzaImage = ({className, imgUrl, size}: Props) => {
  return (
    <div
      className={cn(
        'relative flex w-full flex-1 items-center justify-center',
        className
      )}
    >
      <div
        className={cn('relative aspect-square w-full', {
          'max-w-[450px]': size === 20,
          'max-w-[600px]': size === 30,
          'max-w-[750px]': size === 40,
        })}
      >
        <img
          src={imgUrl}
          alt="logo"
          className={cn(
            'absolute inset-0 z-10 m-auto h-2/3 w-2/3 object-contain transition-all duration-300'
          )}
        />
        <div
          className={
            'absolute inset-0 rounded-full border-2 border-dashed border-gray-200'
          }
        />
        <div
          className={
            'absolute inset-[9%] rounded-full border-2 border-dotted border-gray-100'
          }
        />
      </div>
    </div>
  );
};
