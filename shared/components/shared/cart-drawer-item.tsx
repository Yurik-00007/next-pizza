'use client';
import {cn} from 'cn';
import * as CartItem from './cart-item-details';
import {CartItemDetailsProps} from '@/shared/components/shared/cart-item-details/cart-item-details.type';
import {Trash2Icon} from 'lucide-react';

type Props = CartItemDetailsProps & {
  className?: string;
};
/*
interface Props extends CartItemDetailsProps {
  className?: string;
}
*/

export const CartDrawerItem = ({
  id,
  imageUrl,
  name,
  price,
  quantity,
  details,
  className,
}: Props) => {
  return (
    <div className={cn('flex gap-6 bg-white p-5', className)}>
      <CartItem.Image src={imageUrl} />
      <div className={'flex-1'}>
        <CartItem.Info
          name={name}
          details={details}
        />
        <hr className={'my-3'} />
        <div className={'flex items-center justify-between'}>
          <CartItem.Button
            onClick={(type) => console.log(type)}
            value={quantity}
          />
          <div className={'flex items-center gap-3'}>
            <CartItem.Price value={price} />
            <Trash2Icon
              className={'cursor-pointer text-gray-400 hover:text-gray-600'}
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
