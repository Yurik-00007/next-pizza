'use client';

import {cn} from 'cn';
import {useCategoryStore} from '@/store/category';
import {Category} from '@prisma/client';

type Props = {
  className?: string;
  productItems: Category[];
};

export const Categories = ({className, productItems}: Props) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn('inline-flex gap-2 rounded-2xl bg-gray-50 p-2', className)}
    >
      {productItems.map(({name, id}, i) => (
        <a
          key={i}
          className={cn(
            'flex h-11 items-center rounded-2xl px-5 font-bold',
            activeCategoryId === id &&
              'text-primary bg-white shadow-md shadow-gray-200'
          )}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
