import * as React from 'react';
import {cn} from 'cn';
import {CircleCheck} from 'lucide-react';

type Props = {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};
export const IngredientItem = ({
  className,
  onClick,
  name,
  active,
  price,
  imageUrl,
}: Props) => {
  return (
    <div
      className={cn(
        'relative flex w-32 cursor-pointer flex-col items-center rounded-md bg-white p-1 text-center shadow-md',
        {'border-primary border': active},
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className={'text-primary absolute top-2 right-2'} />
      )}
      <img
        width={110}
        height={110}
        src={imageUrl}
        alt={name}
      />
      <span className={'mb-1 text-xs'}>{name}</span>
    </div>
  );
};
