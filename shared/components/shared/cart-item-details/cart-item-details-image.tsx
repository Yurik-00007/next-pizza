import {cn} from 'cn';

type Props = {
  src: string;
  className?: string;
};
export const CartItemDetailsImage = ({src, className}: Props) => {
  return (
    <img
      className={cn('h-[60px] w-[60px] shrink-0 object-cover', className)}
      src={src}
      alt="product"
    />
  );
};
